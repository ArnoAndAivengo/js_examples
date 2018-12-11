Все в один файл - babel src -o dist/es5.js
Создание dist папки - babel src -d dist
Следим за файлами - babel es2015.js -o es5.js -w
Минификация файлов - babel src -d dist --minified
Игнорирование файлов - babel src -d dist --ignore (все файлыгде присутствует слово test) *test.js


stage-0 - Strawman
stage-1 - Proposal
stage-2 - Draft
stage-3 - Candidate
stage-4 - Finished