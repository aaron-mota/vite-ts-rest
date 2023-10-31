import { generateOpenApi } from '@ts-rest/open-api';
import SwaggerUI from 'swagger-ui-react';
import { contract } from '../../api/contract';

const openApiDocument = generateOpenApi(contract, {
  info: {
    title: 'Pokemon API',
    description: 'API for Pokemon',
    version: '1.0.0',
  },
});


export function Swagger() {
  return (
    <>
      <div>
        <SwaggerUI spec={openApiDocument} />
      </div>
    </>
  );
}