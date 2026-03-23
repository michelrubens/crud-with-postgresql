const nameInput = document.getElementById('user-name')
const emailInput = document.getElementById('user-email')
const usersTableBody = document.getElementById('users-table-body')
const result = document.getElementById('result')
const saveButton = document.getElementById('save-user')
const clearButton = document.getElementById('clear-user')

function renderEmptyTable(message) {
  usersTableBody.innerHTML = `
    <tr>
      <td colspan="3" class="user-table-empty">
        ${message}
      </td>
    </tr>
  `
}

function renderUsers(users) {
  if (users.length == 0) {
    renderEmptyTable('Nenhum usuário encontrado.')
  } else {
    let rowsTemp = ''
    for (let i = 0; i < users.length; i++) {
      console.log(users[i])
      rowsTemp += `
        <tr>
          <td>${users[i].name}</td>
          <td>${users[i].email}</td>
          <td class="user-table-actions-cell">
            <button class="delete-user-button" onClick="deleteUser(${users[i].id_user})">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M9 3h6l1 2h4v2H4V5h4l1-2zm1 6h2v8h-2V9zm4 0h2v8h-2V9zM7 9h2v8H7V9zm1 12a2 2 0 0 1-2-2V8h12v11a2 2 0 0 1-2 2H8z"fill="currentColor"></path>
              </svg>
            </button>
          </td>
        </tr>
      `
    }
    usersTableBody.innerHTML = rowsTemp
  }
}

function clearForm() {
  nameInput.value = ''
  emailInput.value = ''
}

async function loadUsers() {
  const response = await fetch('/users')
  if (response.ok) {
    const users = await response.json()
    renderUsers(users)
  } else {
    renderEmptyTable('Problemas ao obter os usuários.')
  }
}

async function createUser() {
  const name = nameInput.value.trim()
  const email = emailInput.value.trim()
  if (name && email) {
    showResult('Salvando usuário...', 'loading')
    const response = await fetch('/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email })
    })
    if (response.ok) {
      const user = await response.json()
      clearForm()
      showResult(
        `Usuário(a) ${user.name} cadastrado(a) com sucesso.`,
        'success'
      )
      await loadUsers()
    } else {
      showResult('Problemas ao excluir o(a) usuário(a).', 'error')
    }
  } else {
    showResult('Preencha nome e e-mail para continuar.', 'error')
  }
}

async function deleteUser(id) {
  showResult('Excluindo registro...', 'loading')
  const response = await fetch(`/users/${id}`, { method: 'DELETE' })
  if (response.ok) {
    const user = await response.json()
    showResult(`Usuário(a) ${user.name} excluído(a) com sucesso.`, 'success')
    await loadUsers()
  } else {
    showResult('Problemas ao excluir o(a) usuário(a).', 'error')
  }
}

function showResult(message, type) {
  result.textContent = message
  result.className = `result ${type}`
}

saveButton.addEventListener('click', function () {
  createUser()
})

clearButton.addEventListener('click', function () {
  clearForm()
})

loadUsers()
