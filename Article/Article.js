class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "Expand"
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', (e) => this.expandArticle(e));
  }
  
  expandArticle(e) {
    if (this.domElement.classList.contains('article-open')) {
      this.domElement.classList.toggle('article-open')
      this.expandButton.textContent = "Expand"
    }
    else {
      this.domElement.classList.toggle('article-open')
      this.expandButton.textContent = "Close"
    } 
  }
}

/*- Select all classes named ".article" and assign that value to the articles variable.  
- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.*/
let articles = document.querySelectorAll('.article');
articles.forEach((article) => {
  return new Article(article);
});