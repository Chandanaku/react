import React from "react";

interface userProps {
  name: string;
  age: number;
  isactive: boolean;
}
function Profile({ name, age, isactive }: userProps) {
  return (
    <div className="user-profile">
      <h2>username: {name}</h2>
      <p>
        age: {age} status: {isactive}
      </p>
    </div>
  );
}
export default Profile;
