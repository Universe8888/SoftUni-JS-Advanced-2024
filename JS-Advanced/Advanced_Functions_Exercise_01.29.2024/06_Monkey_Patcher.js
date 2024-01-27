/**
 * @param {string} command
 * @this {object}
 * @return {number[]}
 */

function solution(command) {
    let post = this;
    let commands = {
        upvote: () => post.upvotes++,
        downvote: () => post.downvotes++,
        score: () => {
            let { upvotes, downvotes } = post;
            let total = upvotes + downvotes;
            let balance = upvotes - downvotes;
            let obfuscationFactor = Math.ceil(Math.max(upvotes, downvotes) * 0.25);
            let obfuscatedUpvotes = total > 50 ? upvotes + obfuscationFactor : upvotes;
            let obfuscatedDownvotes = total > 50 ? downvotes + obfuscationFactor : downvotes;
            let rating = getRating(upvotes, downvotes, total, balance);

            return [obfuscatedUpvotes, obfuscatedDownvotes, balance, rating];
        }
    };

    return commands[command]();

    function getRating(upvotes, downvotes, total, balance) {
        if (total < 10) {
            return 'new';
        }
        if (upvotes / total > 0.66) {
            return 'hot';
        }
        if (balance >= 0 && total > 100) {
            return 'controversial';
        }
        if (balance < 0) {
            return 'unpopular';
        }
        return 'new';
    }
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa', 
    upvotes: 100, 
    downvotes: 100 
};

solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
// solution.call(post, 'downvote'); // (executed 50 times)
// score = solution.call(post, 'score'); // [139, 189, -50, 'unpopular']

console.log(score);