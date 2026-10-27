import assert from 'node:assert/strict';
import {workspaceFile} from '../src/nexus-workspace-contract.mjs';
const file='Contacts/contact-'+'a'.repeat(64)+'.txt';
assert.equal(workspaceFile({path:file,content:'Synthetic ordinary note.'}),file);
for(const path of ['../Other_Project/notes.txt','Other_Project/notes.txt','Contacts/person.txt','Contacts/../README.txt','/README.txt','README.txt?share=anyone'])assert.throws(()=>workspaceFile({path,content:'fixture'}));
assert.throws(()=>workspaceFile({path:'README.txt',content:'x'.repeat(64001)}));
assert.throws(()=>workspaceFile({path:'README.txt',content:'fixture',url:'https://example.invalid'}));
console.log('Workspace path and size guards passed; no external calls.');
