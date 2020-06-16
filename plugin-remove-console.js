module.exports = function ({ types }) {
  return {
    visitor: {
      ExpressionStatement(path) {
        if (types.isCallExpression(path.node.expression)) {
          if (types.isMemberExpression(path.node.expression.callee)) {
            const memberExp = path.node.expression.callee;
            if (memberExp.object.name === "console" && memberExp.property.name === "log") {
              path.remove();
            }
          }
        }
      }
    }
  }
}