fetch('https://randomuser.me/api/?nat=BR&results=6')
    .then(response => response.json())
    .then(data => {
        const users = data.results
        
        // Iterando sobre os 6 usuários e atualizando cada seção de comentário
        users.forEach((user, index) => {
            
            function querySelector(index) {
                const userIndex = index + 1
                const userNameElement = document.querySelector(`#user-name-${userIndex}`)
                const userProfileImg = document.querySelector(`#img-profile-${userIndex}`)
                const userEmailElement = document.querySelector(`#user-email-${userIndex}`)
                
                return { userNameElement, userProfileImg, userEmailElement }
            }

            function innerHTML(user, index) {
                const { userNameElement, userProfileImg, userEmailElement } = querySelector(index)

                if (userNameElement && userProfileImg && userEmailElement) {
                    userNameElement.innerText = `${user.name.first} ${user.name.last}`
                    userProfileImg.src = user.picture.large
                    userEmailElement.innerHTML = `${user.email}`
                }
            }

            innerHTML(user, index)
        })
    })
    .catch(error => console.error('Erro:', error))

