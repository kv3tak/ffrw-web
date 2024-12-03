import * as path from "path";
import {GatsbyNode} from "gatsby";

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"]  = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@/components": path.resolve(__dirname, "src/components"),
        "@/lib/utils": path.resolve(__dirname, "src/lib/utils"),
      },
    },
  });
};
