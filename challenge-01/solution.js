// 1. The function gets an array with objects as input, name and status as string and last Activity as number, the function returns an object with three fields online, offline and away, each field has an array with usernames as strings - QUESTION if no user is online, why should the online property not return an empty array, but be left out completely - LOGICAL SOLUTION?

const users = [
  {
    username: "David",
    status: "online",
    lastActivity: 10, //11
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

// const users = [];

function getOnlineUsers(users) {
  console.log("getOnlineUsers:", users);

  // 2. I want to see who (users) is online, offline and away. Therefore I need to check the username, their set status and how many minutes they are away, if their status is online but their last activity was more than 10 minutes (>10) they will be shown as away otherwise they will be shown as online, else they are offline. So I want to filter who is online, offline or away

  const filterUsersOnline = users.filter(function (user) {
    if (user.status === "online" && user.lastActivity <= 10) {
      return true;
    } else {
      return false;
    }
  });

  const filterUsersAway = users.filter(function (user) {
    if (user.status === "online" && user.lastActivity > 10) {
      return true;
    } else {
      return false;
    }
  });

  const filterUsersOffline = users.filter(function (user) {
    if (user.status === "offline") {
      return true;
    } else {
      return false;
    }
  });
  console.log("online:", filterUsersOnline);
  console.log("away:", filterUsersAway);
  console.log("offline:", filterUsersOffline);

  // 3. Then I only want to show the field online, offline and away with Username as a string

  const onlineUsernames = filterUsersOnline.map(function (user) {
    return user.username;
  });

  const offlineUsernames = filterUsersOffline.map(function (user) {
    return user.username;
  });

  const awayUsernames = filterUsersAway.map(function (user) {
    return user.username;
  });

  console.log("online:", onlineUsernames);
  console.log("offline:", offlineUsernames);
  console.log("away:", awayUsernames);

  // 4. I want to return an object with the fields online, offline, away and the username as string, but if no users are online, the object should only return the fields offline and away

  /*
  return {
    online: onlineUsernames,
    offline: offlineUsernames,
    away: awayUsernames,
  };
  */

  const output = {};

  if (onlineUsernames.length !== 0) {
    output.online = onlineUsernames;
  }

  if (offlineUsernames.length > 0) {
    output.offline = offlineUsernames;
  }

  if (awayUsernames.length > 0) {
    output.away = awayUsernames;
  }

  return output;
}

console.log(getOnlineUsers(users));
