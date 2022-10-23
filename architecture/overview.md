# My engineering web site overview

- [My engineering web site overview](#my-engineering-web-site-overview)
  - [Page Design](#page-design)
    - [Pages](#pages)
      - [Top page](#top-page)
      - [Profile Page](#profile-page)
      - [Experiences page](#experiences-page)
      - [Contact](#contact)
    - [Implementation with Angular](#implementation-with-angular)
      - [Angular Comopnents](#angular-comopnents)
        - [top](#top)
        - [profile](#profile)
        - [experiences-head](#experiences-head)
        - [experiences-container](#experiences-container)
        - [experiences-content](#experiences-content)
        - [experience-card](#experience-card)
        - [contact](#contact-1)
      - [Services](#services)
        - [experiences-api](#experiences-api)
      - [Launch locally with Docker Composer](#launch-locally-with-docker-composer)
      - [Deploy](#deploy)
        - [To AWS](#to-aws)
        - [To Azure](#to-azure)
        -

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

#### Angular Comopnents

##### top

##### profile

##### experiences-head

##### experiences-container

##### experiences-content

##### experience-card

##### contact

#### Services

##### experiences-api

#### Launch locally with Docker Composer

| tool        | version |
| :---------- | ------: |
| Node.js     | 16.13.0 |
| npm         |  6.14.8 |
| Angular CLI | 12.2.12 |

#### Deploy

Target environment.
Here I am going to try deploying to both AWS and Azure.

![](deploy.png)

##### To AWS

https://docs.aws.amazon.com/ja_jp/AmazonS3/latest/userguide/WebsiteHosting.html

##### To Azure

https://docs.microsoft.com/ja-jp/azure/postgresql/flexible-server/tutorial-webapp-server-vnet
