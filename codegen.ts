require('dotenv').config()
import type { CodegenConfig } from '@graphql-codegen/cli'
// import { Schema } from 'inspector'
// import schema from "./src/app/schema":

const config: CodegenConfig = {
  overwrite: true,
  schema: "./src/graphql/schema",
  generates: {
    'src/graphql/generated/client.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-query'],
      config: {
        exposeQueryKeys: true,
        exposeFetcher: true,
        withHooks: true,
        dedupeFragments: true,
      },
    },
  },
}

export default config