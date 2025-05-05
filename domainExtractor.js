function domainExtractor(emails) {
  return [...new Set(emails.map((email) => email.split("@")[1]))].sort();
}

const emails = [
  "user@yahoo.com",
  "user@hotmail.com",
  "user@alphamail.com",
  "user@gmail.com",
  "user@xyz.com",
  "user@wiki.com",
];

console.log(domainExtractor(emails));
