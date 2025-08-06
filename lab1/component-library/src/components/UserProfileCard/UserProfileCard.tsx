import type { UserProfileCardProps } from "../../types";

export function UserProfileCard({
  user,
  showEmail,
  showRole,
  onEdit,
  children,
}: UserProfileCardProps) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "5px",
        marginBottom: "10px",
      }}
    >
      <div>{user.avatarUrl && <img src={user.avatarUrl}></img>}</div>
      <div>
        <h4>{user.name}</h4>
        {showEmail && <p>{user.email}</p>}
        {showRole && <p>{user.role}</p>}
      </div>
      {onEdit && <button onClick={() => onEdit(user.id)}></button>}
      {children}
    </div>
  );
}
