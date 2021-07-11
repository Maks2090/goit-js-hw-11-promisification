const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: false },
  ];

  
  
  const toggleUserState = (allUsers, username,) => {
    const updatedUsers = allUsers.map(user =>
      user.name === username ? { ...user, active: !user.active } : user
    );
    return new Promise((resolve) => {
        resolve(updatedUsers)
    })
  
    
  };
  

  toggleUserState(users, 'Mango').then(console.table);
  toggleUserState(users, 'Ajax').then(console.table);
