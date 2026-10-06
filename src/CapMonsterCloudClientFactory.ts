import { CapMonsterCloudClient } from './CapMonsterCloudClient';
import { ClientOptions } from './ClientOptions';
import { ClientURL } from './ClientURL';
import { CsMap, isNode } from './Utils';
import { HttpClient } from './HttpClient';
import { readOwnPackageVersion } from './nodeRequire';

export class CapMonsterCloudClientFactory {
  static httpTimeout = 1000 * 21;
  static httpClients = new CsMap<string, HttpClient>();
  static productName = 'Zennolab.CapMonsterCloud.Client.JS';

  static Create(options: ClientOptions) {
    return new CapMonsterCloudClient(
      options,
      CapMonsterCloudClientFactory.httpClients.GetOrAdd(
        options.serviceUrl.href,
        CapMonsterCloudClientFactory.CreateHttpClient(options.serviceUrl),
      ),
    );
  }

  static CreateHttpClient(url: ClientURL) {
    const httpClient = new HttpClient({
      url,
      timeout: CapMonsterCloudClientFactory.httpTimeout,
      requestHeaders: { userAgent: CapMonsterCloudClientFactory.CreateUserAgentString() },
    });

    return httpClient;
  }

  static CreateUserAgentString() {
    const productVersion = isNode ? readOwnPackageVersion() : 'ProductVersion';

    return `${CapMonsterCloudClientFactory.productName}/${productVersion}`;
  }
}
