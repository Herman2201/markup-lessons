const get = (obj, item) => {

    const a = obj;
    console.log(a);
    for (const item1 of item) {
        if (obj.hasOwnProperty(item1)){
            console.log(true)
        }
    }
    };
    
    
    const data = {
      user: 'ubuntu',
      hosts: {
        0: {
          name: 'web1',
        },
        1: {
          name: 'web2',
          null: 3,
          active: false,
        },
      },
    };
    const test1 = get(data, ['undefined']); // null
    // const test2 = get(data, ['user']); // 'ubuntu'
    // const test3 = get(data, ['user', 'ubuntu']); // null
    // const test4 = get(data, ['hosts', 1, 'name']); // 'web2'
    // const test5 = get(data, ['hosts', 0]); // { name: 'web1' }
    // const test6 = get(data, ['hosts', 1, null]); // 3
    // const test7 = get(data, ['hosts', 1, 'active']); // false
    
    console.log(test2);