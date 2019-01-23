const vscode = require('vscode');
const sqlFormatter = require('poor-mans-t-sql-formatter');

function activate(context) {
    const formatDisposable = vscode.commands.registerTextEditorCommand('poorSql.format', function (activeEditor, activeEditorEdit) {
        formatWithOptions(activeEditor, activeEditorEdit, getFormatterOptions());
    });

    const obfuscateDisposable = vscode.commands.registerTextEditorCommand('poorSql.obfuscate', function (activeEditor, activeEditorEdit) {
        formatWithOptions(activeEditor, activeEditorEdit, getFormatterOptions(true));
    })

    context.subscriptions.push(formatDisposable);
    context.subscriptions.push(obfuscateDisposable);
}

function formatWithOptions(activeEditor, activeEditorEdit, options=null) {
    const { text, range } = getTextInfo(activeEditor);
    const transformed = sqlFormatter.formatSql(text, options || getFormatterOptions());

    if (transformed.errorFound) {
        vscode.window.showInformationMessage('There was an error while formatting your SQL.');
    } else {
        activeEditorEdit.delete(range);
        activeEditorEdit.insert(range.start, transformed.text);
    }
}

function getTextInfo(activeEditor) {
    const { selection, document } = activeEditor;
    let { start, end } = selection;

    if (start.line > end.line || (start.line === end.line && start.character >= end.character)) {
        const lastLine = document.lineCount - 1;
        const lastLineObj = document.lineAt(lastLine);

        const lastChar = lastLineObj.range.end.character;

        start = { character: 0, line: 0 };
        end = { character: lastChar, line: lastLine };
    }
    
    const range = new vscode.Range(start.line, start.character, end.line, end.character);
    const text = document.getText(range);

    return {
        text,
        range
    };
}

function getFormatterOptions(isObfuscate=false) {
    const settings = vscode.workspace.getConfiguration('poorSql');

    const options = Object.assign({}, settings);
    options.indent = options.tabIndent ? '\t' : ' '.repeat(options.numIndentSpaces || 4);
    options.spacesPerTab = options.numIndentSpaces;

    if (isObfuscate) {
        return Object.assign({}, options, options.obfuscate, {
            formattingType: 'obfuscation'
        });
    }

    return options;
}

exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;