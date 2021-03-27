import { isRegionsEmpty } from './is-region-empty';
import { buildNoContentReponse } from './build-no-content-response';
import { removeNoUnsedProperties } from './remove-no-unsed-properties';
import { buildSuccessRegionsResponse } from './build-success-regions-response';

function adapterRegionsResponse(data, cacheMaxAge) {
  if (isRegionsEmpty(data)) {
    return buildNoContentReponse();
  }
  return buildSuccessRegionsResponse(removeNoUnsedProperties(data), cacheMaxAge);
}

export { adapterRegionsResponse };