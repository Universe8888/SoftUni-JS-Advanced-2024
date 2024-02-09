function solution() {
    class Post {
        constructor(title, content) {
            this.title = title || "No title"; // Default to "No title" if title is falsy
            this.content = content || "No content"; // Default to "No content" if content is falsy
        }
    
        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }
    
    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = Number.isInteger(likes) ? likes : 0; // Default to 0 if likes is not a number
            this.dislikes = Number.isInteger(dislikes) ? dislikes : 0; // Default to 0 if dislikes is not a number
            this.comments = [];
        }
    
        addComment(comment) {
            if (typeof comment === "string" && comment.trim() !== "") { // Only add non-empty strings
                this.comments.push(comment);
            }
        }
    
        toString() {
            let rating = this.likes - this.dislikes;
            let result = super.toString() + `\nRating: ${rating}`;
            if (this.comments.length > 0) {
                result += `\nComments:\n` + this.comments.map(comment => ` * ${comment}`).join('\n');
            }
            return result;
        }
    }
    
    class BlogPost extends Post {
        constructor(title, content, views = 0) {
            super(title, content);
            this.views = Number.isInteger(views) ? views : 0; // Default to 0 if views is not a number
        }
    
        view() {
            this.views++;
            return this; // Allows for chaining
        }
    
        toString() {
            return super.toString() + `\nViews: ${this.views}`;
        }
    }
    
return {
    Post,
    SocialMediaPost,
    BlogPost
};

}

const classes = solution();

let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post

// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");

scm.addComment("Very good post");

scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle

// Content: TestContent

// Rating: -5

// Comments:

// * Good post

// * Very good post

// * Wow!

// 88 / 100