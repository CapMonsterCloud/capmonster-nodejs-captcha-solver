import { FunCaptchaRequest } from './FunCaptchaRequest';
import { GeeTestRequest } from './GeeTestRequest';
import { ImageToTextRequest } from './ImageToTextRequest';
import { RecaptchaV2EnterpriseRequest } from './RecaptchaV2EnterpriseRequest';
import { RecaptchaV2Request } from './RecaptchaV2Request';
import { RecaptchaV3ProxylessRequest } from './RecaptchaV3ProxylessRequest';
import { ComplexImageRecaptchaRequest } from './ComplexImageRecaptchaRequest';
import { ComplexImageFunCaptchaRequest } from './ComplexImageFunCaptchaRequest';
import { DataDomeRequest } from './DataDomeRequest';
import { AltchaRequest } from './AltchaRequest';
import { TenDIRequest } from './TenDIRequest';
import { BasiliskRequest } from './BasiliskRequest';
import { ImpervaRequest } from './ImpervaRequest';
import { BinanceRequest } from './BinanceRequest';
import { ComplexImageTaskRecognitionRequest } from './ComplexImageTaskRecognitionRequest';
import { AmazonRequest } from './AmazonRequest';
import { TurnstileRequest } from './TurnstileRequest';
import { ProsopoRequest } from './ProsopoRequest';
import { YidunRequest } from './YidunRequest';
import { MTCaptchaRequest } from './MTCaptchaRequest';
import { HuntRequest } from './HuntRequest';
import { AlibabaRequest } from './AlibabaRequest';
import { FriendlyRequest } from './FriendlyRequest';
import { TSPDRequest } from './TSPDRequest';
import { CommonCaptchaRequest } from './CommonCaptchaRequest';

/**
 * Universal type for recognition request
 */
export type Task =
  | FunCaptchaRequest
  | GeeTestRequest
  | ImageToTextRequest
  | RecaptchaV2EnterpriseRequest
  | RecaptchaV2Request
  | RecaptchaV3ProxylessRequest
  | ComplexImageRecaptchaRequest
  | ComplexImageFunCaptchaRequest
  | TurnstileRequest
  | DataDomeRequest
  | AltchaRequest
  | TenDIRequest
  | BasiliskRequest
  | ImpervaRequest
  | BinanceRequest
  | ComplexImageTaskRecognitionRequest
  | AmazonRequest
  | ProsopoRequest
  | YidunRequest
  | MTCaptchaRequest
  | TSPDRequest
  | HuntRequest
  | AlibabaRequest
  | FriendlyRequest
  | CommonCaptchaRequest;
