const faq = {
  "when is bin day": "You can check your bin collection day at https://www.stockport.gov.uk/bin-collection-days",
  "how do i apply for housing": "You can apply for housing at https://www.stockporthomes.org/find-a-home/apply-for-a-home/",
  "what is council tax support": "Council Tax Support helps low-income households. Learn more: https://www.stockport.gov.uk/start/apply-for-council-tax-support"
};
function getAnswer() {
  const input = document.getElementById("userInput").value.toLowerCase().trim();
  const responseBox = document.getElementById("responseBox");
  const match = Object.keys(faq).find(q => input.includes(q));
  if (match) {
    responseBox.innerHTML = `<p>${faq[match]}</p>`;
  } else {
    responseBox.innerHTML = `<p>Sorry, I don't know that one. Try rephrasing or check <a href='https://www.stockport.gov.uk'>Stockport.gov.uk</a>.</p>`;
  }
}