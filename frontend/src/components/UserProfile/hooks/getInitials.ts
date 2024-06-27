export function getInitials(name: string) {
  const nameParts = name.trim().split(/\s+/);
  let initials = "";
  for (const part of nameParts) {
    initials += part.charAt(0).toUpperCase();
  }
  return initials;
}
