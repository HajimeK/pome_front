# My engineering web site overview

- [My engineering web site overview](#my-engineering-web-site-overview)
  - [Page Design](#page-design)
    - [Pages](#pages)
      - [Top page](#top-page)
      - [Profile Page](#profile-page)
      - [Experiences page](#experiences-page)
      - [Contact](#contact)
    - [Implementation with Angular](#implementation-with-angular)
      - [Comopnents](#comopnents)
        - [top](#top)
        - [profile](#profile)
        - [experiences-head](#experiences-head)
        - [experiences-container](#experiences-container)
        - [experiences-content](#experiences-content)
        - [experience-card](#experience-card)
        - [contact](#contact-1)
      - [Services](#services)
        - [experiences-api](#experiences-api)
  - [Middleware with express.js and Backend DB](#middleware-with-expressjs-and-backend-db)
    - [Architecture](#architecture)
      - [API](#api)
        - [Database](#database)
        - [Target](#target)
          - [To AWS](#to-aws)
          - [To Azure](#to-azure)

## Page Design

![Site Design](sitedesign.png)

### Pages

#### Top page

Simply explains what I am and what I can.

#### Profile Page

#### Experiences page

Display the demo applications in tiles.
By clicking each tiles, it jumps to the applications to explain my work.

Skills tiled with material UI cards.
Jumps to the site of the implementation using the skill.
![Skill Card](skill_card.svg)

| element     | description                                                  |
| :---------- | :----------------------------------------------------------- |
| PNG file    | The top Web Site screen shot.(also has the link to the site) |
| SKILL Name  | Skill name listed in DB.                                     |
| Description | Skill Description in DB                                      |
| Share       | For visitors to share the skill card in Linkdin              |
| Exlore      | Link to the Web Site                                         |

#### Contact

### Implementation with Angular

```sh
ng new pome
ng generate component top
ng generate component profile
ng generate component experiences-head
ng generate component experiences-container
ng generate component experiences-content
ng generate component experience-card
ng generate component contact

ng generate service experiences-api
```

#### Comopnents

##### top

##### profile

##### experiences-head

##### experiences-container

##### experiences-content

##### experience-card

##### contact

#### Services

##### experiences-api

## Middleware with express.js and Backend DB

### Architecture

#### API

##### Database

![](tabledesign.png)

##### Target

###### To AWS

http://pomefront.s3-website-ap-northeast-1.amazonaws.com/

https://docs.aws.amazon.com/ja_jp/AmazonS3/latest/userguide/WebsiteHosting.html

Set up Elasti Beanstalk environment with the following command.

```sh

```

https://docs.aws.amazon.com/ja_jp/elasticbeanstalk/latest/dg/using-features.managing.db.html

Set up S3 bucket for Web Hosting with the following command.

```sh

```

###### To Azure

Set up PosgtreSQL environment with the following command.

```sh

```

https://docs.microsoft.com/ja-jp/azure/developer/python/how-to-create-static-sites

Set up Azure AppService environment with the following command.

```sh

```

https://docs.microsoft.com/ja-jp/azure/postgresql/flexible-server/tutorial-webapp-server-vnet

Set up Azure Storage for Web Hosting with the following command.

```sh

```
