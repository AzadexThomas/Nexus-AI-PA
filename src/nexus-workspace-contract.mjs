// Public, deployment-independent path policy. Private drive/folder IDs live in the adapter.
export function workspaceFile(input){
 if(!input||typeof input!=='object'||Array.isArray(input)||Object.keys(input).some(k=>!['path','content'].includes(k)))throw Error('workspace_fields');
 const path=input.path;
 if(typeof path!=='string'||!(/^(?:README\.txt|Recovery\/RUNBOOK\.txt|Operating_Notes\/STATUS\.txt|(?:Contacts|Conversation_Summaries)\/contact-[a-f0-9]{64}\.txt)$/).test(path))throw Error('nexus_workspace_path_only');
 if(input.content!==undefined&&(typeof input.content!=='string'||new TextEncoder().encode(input.content).length>64000))throw Error('workspace_content_limit');
 return path;
}