import { ErrorType } from './ErrorType';
import { TaskCompletedSolution } from './GetTaskResult';

/**
 * General captcha recognition result
 * @template TSolution Concrete captcha result type
 */
export class CaptchaResult<S extends TaskCompletedSolution> {
  /**
   * Error code
   */
  public error?: ErrorType;
  /**
   * Task result. Different for each type of task.
   */
  public solution?: S;
  /**
   * Solution cost in US dollars (USD). Returned only for a ready result.
   */
  public cost?: number;
  constructor({ error, solution, cost }: { error?: ErrorType; solution?: S; cost?: number }) {
    this.error = error;
    this.solution = solution;
    this.cost = cost;
  }
}
