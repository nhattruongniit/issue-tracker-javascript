document.getElementById('main').innerHTML = 'Hello World!'

// example render todo list with pure js
// const mockTodos = [
//   {
//     id: '2321312312122131',
//     description: 'xx',
//     severity: 'xx',
//     status: 'new'
//   }
// ]


// function handleAddTodo() {
//   const todoItem = {
//     id: Date.now(),
//     description: 'xxxxxxx',
//     severity: 'low',
//     status: 'new'
//   }
//   mockTodos.unshift(todoItem)
// }


// mapIssue.forEach((issue) => {
//   issuesList.innerHTML += `
//       <li id="issue-list-item--${issue.id}" class="issue-list-item">
//           <div class="list-item-header">
//               <div for="" class="list-item-title">${issue.id}</div>
//               <div id="issueStatus" class="list-item-status">
//                   ${issue.status}
//               </div>
//           </div>
//           <div class="list-item-content">
//               <h3 class="issue-name">${issue.description}</h3>
//               <div class="list-item-severity">${issue.severity}</div>
//               <div class="list-item-group-btn">
//                   <button 
//                       id="changeSttBtn" 
//                       class="btn btn--close"
//                       onclick="updateIssueStt(
//                         '${issue.id}', '${issue.status}')"
//                   >
//                       ${issue.status === 'new' ? 'Close' : 'Open'}
//                   </button>
                  
//                   <button 
//                       class="btn btn--delete" 
//                       onclick="deleteIssue('${issue.id}')"
//                   >Delete</button>
//               </div>
//           </div>
//       </li>
//       <br>
//   `;
// });