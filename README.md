# poor-formatter README

This uses the [Poor Man's T-SQL Formatter](https://github.com/TaoK/PoorMansTSqlFormatter) to format your T-SQL inside Azure Data Studio/SQL Operations Studio.

## Features

You can either "prettify"/"beautify"/"format" or obfuscate your T-SQL.

## Extension Settings

This extension contributes the following settings:

* `poorSql.tabIndent`: Use tabs for indentation?
* `poorSql.numIndentSpaces`: Number of spaces to use when indenting. Ignored if tabIndent is true.
* `poorSql.maxLineWidth`: Max characters per line.
* `poorSql.statementBreaks`: Number of line breaks between statements.
* `poorSql.clauseBreaks`: Number of line breaks between clauses within a statement.
* `poorSql.expandCommaLists`: Expand comma-delimited lists onto new lines?
* `poorSql.trailingCommas`: Should commas be at the end of lines?
* `poorSql.spaceAfterExpandedComma`: Should a space be added after commas?
* `poorSql.expandBooleanExpressions`: Should boolean operators cause a linebreak?
* `poorSql.expandCaseStatements`: Should WHEN and THEN expressions in a CASE statement cause a linebreak?
* `poorSql.expandBetweenConditions`: Should arguments of BETWEEN expressions cause linebreaks?
* `poorSql.expandInLists`: Should IN lists be split by linebreaks?
* `poorSql.breakJoinOnSections`: Should the ON section of a JOIN clause cause a linebreak?
* `poorSql.uppercaseKeywords`: Should keywords be automatically uppercased?
* `poorSql.keywordStandardization`: Should less-common keywords be replaced with common alternatives? (Caution: only safe for T-SQL)
* `poorSql.obfuscate.randomizeKeywordCase`: Obfuscation: should the case of keywords be randomized?
* `poorSql.obfuscate.randomizeLineLengths`: Obfuscation: should line lengths be randomized?
* `poorSql.obfuscate.preserveComments`: Obfuscation: should comments be preserved?
* `poorSql.obfuscate.enableKeywordSubstitution`: Obfuscation: allow common keywords to be replaced with less common alternatives? (Caution: only safe for T-SQL)

## Release Notes

### 0.1.0

Initial release.
