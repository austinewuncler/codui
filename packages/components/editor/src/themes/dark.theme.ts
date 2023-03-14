import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { type Extension } from '@codemirror/state';
import { tags as t } from '@lezer/highlight';
import { EditorView } from 'codemirror';

const foreground = '#c8c8c8';
const background = '#000';
const cursor = '#ff50ff';
const activeLine = '#9696961a';
const searchMatch = '#969696';
const tooltipHighlight = '#282828';

const theme = EditorView.theme(
  {
    '&': { color: foreground, backgroundColor: background },
    '.cm-content': { caretColor: cursor },
    '.cm-cursor, .cm-dropCursor': { borderLeftColor: cursor },
    '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection':
      { backgroundColor: activeLine },
    '.cm-searchMatch': { backgroundColor: '#96969633' },
    '.cm-searchMatch.cm-searchMatch-selected': {
      backgroundColor: activeLine,
      outline: `1px solid ${searchMatch}`,
    },
    '.cm-activeLine': { backgroundColor: activeLine },
    '.cm-selectionMatch': { backgroundColor: '#96969659' },
    '&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket': {
      background: 'none',
      outline: '1px solid #787878',
    },
    '.cm-gutters': {
      backgroundColor: background,
      color: '#3c3c3c',
      border: 'none',
    },
    '.cm-activeLineGutter': { backgroundColor: background, color: searchMatch },
    '.cm-tooltip': {
      border: `1px solid ${tooltipHighlight}`,
      backgroundColor: '#141414',
      color: searchMatch,
    },
    '.cm-tooltip-autocomplete': {
      '& > ul > li[aria-selected]': {
        backgroundColor: tooltipHighlight,
        color: foreground,
      },
    },
  },
  { dark: true }
);

const highlight = HighlightStyle.define([
  { tag: t.comment, color: '#647882' },
  { tag: t.lineComment, color: '#647882' },
  { tag: t.blockComment, color: '#647882' },
  { tag: t.docComment, color: '#ff0000' },
  { tag: t.name, color: '#c8c8c8' },
  { tag: t.definition(t.typeName), color: '#c8c8c8' },
  { tag: t.typeName, color: '#9696ff' },
  { tag: t.standard(t.typeName), color: '#9696ff' },
  { tag: t.tagName, color: '#ff7878' },
  { tag: t.standard(t.tagName), color: '#ff7878' },
  { tag: t.variableName, color: '#ffdc96' },
  { tag: t.definition(t.variableName), color: '#ffdc96' },
  { tag: t.function(t.variableName), color: '#00dcdc', fontStyle: 'italic' },
  { tag: t.propertyName, color: '#c8c8c8' },
  { tag: t.function(t.propertyName), color: '#00dcdc', fontStyle: 'italic' },
  { tag: t.definition(t.propertyName), color: '#c8c8c8' },
  { tag: t.special(t.propertyName), color: '#ff0000' },
  { tag: t.attributeName, color: '#9696ff' },
  { tag: t.className, color: '#dc8cff' },
  { tag: t.constant(t.className), color: '#dc8cff' },
  { tag: t.labelName, color: '#c8c8c8' },
  { tag: t.namespace, color: '#ff0000' },
  { tag: t.macroName, color: '#ff0000' },
  { tag: t.literal, color: '#aae682' },
  { tag: t.string, color: '#aae682' },
  { tag: t.special(t.string), color: '#ff0000' },
  { tag: t.docString, color: '#ff0000' },
  { tag: t.character, color: '#ffdc96' },
  { tag: t.attributeValue, color: '#aae682' },
  { tag: t.number, color: '#ffb482' },
  { tag: t.integer, color: '#ffb482' },
  { tag: t.float, color: '#ffb482' },
  { tag: t.bool, color: '#ff7878' },
  { tag: t.regexp, color: '#ff0000' },
  { tag: t.escape, color: '#ff0000' },
  { tag: t.color, color: '#c8c8c8' },
  { tag: t.url, color: '#ff0000' },
  { tag: t.keyword, color: '#00b1ff' },
  { tag: t.self, color: '#ff7878' },
  { tag: t.null, color: '#ff7878' },
  { tag: t.atom, color: '#00b1ff' },
  { tag: t.unit, color: '#ffb482' },
  { tag: t.modifier, color: '#00b1ff' },
  { tag: t.operatorKeyword, color: '#ff7878' },
  { tag: t.controlKeyword, color: '#9696ff' },
  { tag: t.definitionKeyword, color: '#00b1ff', fontStyle: 'italic' },
  { tag: t.moduleKeyword, color: '#9696ff' },
  { tag: t.operator, color: '#ff7878' },
  { tag: t.derefOperator, color: '#c8c8c8' },
  { tag: t.arithmeticOperator, color: '#ff7878' },
  { tag: t.logicOperator, color: '#dc8cff' },
  { tag: t.bitwiseOperator, color: '#dc8cff' },
  { tag: t.compareOperator, color: '#dc8cff' },
  { tag: t.updateOperator, color: '#ff0000' },
  { tag: t.definitionOperator, color: '#ff7878' },
  { tag: t.typeOperator, color: '#ff0000' },
  { tag: t.controlOperator, color: '#ff0000' },
  { tag: t.punctuation, color: '#c8c8c8' },
  { tag: t.separator, color: '#c8c8c8' },
  { tag: t.bracket, color: '#c8c8c8' },
  { tag: t.angleBracket, color: '#c8c8c8' },
  { tag: t.squareBracket, color: '#c8c8c8' },
  { tag: t.paren, color: '#c8c8c8' },
  { tag: t.brace, color: '#c8c8c8' },
  { tag: t.content, color: '#c8c8c8' },
  { tag: t.heading, color: '#c8c8c8' },
  { tag: t.heading1, color: '#9696ff' },
  { tag: t.heading2, color: '#9696ff' },
  { tag: t.heading3, color: '#9696ff' },
  { tag: t.heading4, color: '#ff0000' },
  { tag: t.heading5, color: '#ff0000' },
  { tag: t.heading6, color: '#ff0000' },
  { tag: t.contentSeparator, color: '#c8c8c8' },
  { tag: t.list, color: '#c8c8c8' },
  { tag: t.quote, color: '#aae682' },
  { tag: t.emphasis, color: '#ffb482' },
  { tag: t.strong, color: '#ffb482' },
  { tag: t.link, color: '#ffdc96' },
  { tag: t.monospace, color: '#c8c8c8' },
  { tag: t.strikethrough, color: '#ff0000' },
  { tag: t.inserted, color: '#ff0000' },
  { tag: t.deleted, color: '#ff0000' },
  { tag: t.changed, color: '#ff0000' },
  { tag: t.invalid, color: '#ff0000' },
  { tag: t.meta, color: '#ff0000' },
  { tag: t.documentMeta, color: '#ff7878' },
  { tag: t.annotation, color: '#ff0000' },
  { tag: t.processingInstruction, color: '#c8c8c8' },
]);

const darkTheme: Extension = [theme, syntaxHighlighting(highlight)];
export default darkTheme;
