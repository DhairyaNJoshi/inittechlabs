export const generateEmailString = (data: any) => {
  const { email, name, companyName, requirement, phone } = data;
  const generateKeyValueHtml = (label: string, value: string) => {
    if (label === "Email Address") {
      return `<div style="display:flex; padding: 6px 0;">
          <strong>${label}:</strong> &nbsp; <a href="mailto:${value}">${value}</a>
        </div>`;
    } else {
      return `<div style="display:flex; padding: 6px 0;">
          <strong>${label}:</strong> &nbsp; <span>${value}</span>
        </div>`;
    }
  };
  const emailBody = [
    generateKeyValueHtml("Email", email),
    generateKeyValueHtml("Name", name),
    generateKeyValueHtml("Comapany Name", companyName),
    generateKeyValueHtml("Requirement", requirement),
    generateKeyValueHtml("Phone Number", phone),
  ].join("");
  return `<!doctype html>
      <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"
            xmlns:v="urn:schemas-microsoft-com:vml">
            <body style="maring:0;padding:0;font-family:sans-serif; font-size:13px;line-height:1.5;width:100%">
            <div>
            ${emailBody}
            </div>
          </body>
      </html>`;
};
