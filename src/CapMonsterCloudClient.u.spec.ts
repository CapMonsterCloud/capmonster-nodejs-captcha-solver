import { CapMonsterCloudClient } from './CapMonsterCloudClient';
import { ClientOptions } from './ClientOptions';
import { HttpClient } from './HttpClient';
import { ImageToTextRequest } from './Requests/ImageToTextRequest';

describe('Check unit tests for CapMonsterCloudClient cost', () => {
  const createClient = (getTaskResultResponse: object) => {
    const post = jest.fn(async (method: string) => {
      if (method === 'createTask') {
        return { errorId: 0, taskId: 1 };
      }
      return getTaskResultResponse;
    });
    const httpClient = { post } as unknown as HttpClient;
    return new CapMonsterCloudClient(new ClientOptions({ clientKey: 'YOUR_API_KEY' }), httpClient);
  };
  const resultTimeouts = { firstRequestDelay: 0, firstRequestNoCacheDelay: 0, requestsInterval: 1, timeout: 1000 };
  const task = new ImageToTextRequest({ body: 'dummy' });

  it('should pass cost from ready getTaskResult response to CaptchaResult', async () => {
    const client = createClient({ errorId: 0, status: 'ready', solution: { text: 'abc' }, cost: 0.0003 });

    const result = await client.Solve(task, resultTimeouts);

    expect(result.error).toBeUndefined();
    expect(result.solution).toMatchObject({ text: 'abc' });
    expect(result.cost).toBe(0.0003);
  });

  it('should leave cost undefined when getTaskResult response has no cost', async () => {
    const client = createClient({ errorId: 0, status: 'ready', solution: { text: 'abc' } });

    const result = await client.Solve(task, resultTimeouts);

    expect(result.cost).toBeUndefined();
  });
});
