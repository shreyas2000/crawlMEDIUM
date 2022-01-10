const db = require("./db")

class article {
    constructor(title,creator,link,subtitle,claps,comments){
        this.title = title;
        this.creator = creator;
        this.link = link;
        this.subtitle = subtitle;
        this.claps = claps;
        this.comments = comments;
    }

    async save(){
        let sql = `
        INSERT INTO articledata(
          title,
          creator,
          subtitle,
          link,
          claps,
          comments
        )
        VALUES(
          '${this.title}',
          '${this.creator}',
          '${this.subtitle}',
          '${this.link}',
          '${this.claps}',
          '${this.comments}'
        )
        `;
        const [newPost,_] = await db.execute(sql);
        return newPost;
    }
}

module.exports = article