// Web Projects
export const webProjectsData = {
    "categoryId": "3",
    "category": "web",
    "categoryTitle": "Web Projects",
    "projects": [
      {
        "id": "301",
        "icon": "\\img\\portfolio\\icons\\icon_tlf.png",
        "title": "The Lotus Foundation",
        "featured": false,
        "featuredImage": "\\img\\portfolio\\desktop\\project_screenshot_triton.png",
        "tags": [
            {
                "id":"1",
                "name":"Wordpress",
                "className": "is-primary"
            }
        ],
        "description": "Designed and developed the website for a non profit organization based on Ontario, Canada. The project was designed with Adobe XD and developed using wordpress and a custom theme engine.",
        "buttons": [
          {
            "id": "330101",
            "isPrimary": false,
            "text": "Case Study",
            "target": "https://ae-app-labs.github.io/case-studies/tlf"
          },
          {
            "id": "330102",
            "isPrimary": true,
            "text": "View Project",
            "target": "https://www.thelotusfoundation.org"
          }
        ]
      }, 
      {
        "id": "302",
        "icon": "\\img\\portfolio\\icons\\icon_cryptx_web.png",
        "title": "CryptX Web",
        "featured": false,
        "featuredImage": "\\img\\portfolio\\desktop\\project_screenshot_triton.png",
        "tags": [
            {
                "id":"1",
                "name":"Svelte",
                "className": "is-primary"
            }
        ],
        "description": "A simple web app built on Svelte and Bulma to encrypt and decrypt test messages using AES algorithm.",
        "buttons": [
          {
            "id": "330201",
            "isPrimary": true,
            "text": "View Project",
            "target": "https://www.midhunhk.com/cryptx-web/"
          }
        ]
      }
    ]
  }

// Desktop Projects
export const desktopProjectsData = {
    "categoryId": "2",
    "category": "desktop",
    "categoryTitle": "Desktop Applications",
    "projects": [
      {
        "id": "201",
        "icon": "\\img\\portfolio\\icons\\icon_triton_player.png",
        "title": "Triton Player",
        "featured": true,
        "featuredImage": "\\img\\portfolio\\desktop\\project_screenshot_triton.png",
        "tags": [
            {
                "id":"1",
                "name":"Adobe Air",
                "className": "is-primary"
            },
            {
                "id":"2",
                "name": "Flash Platform",
                "className": "is-link"
            }
        ],
        "description": "Triton Player is an MP3 player based on Adobe AIR platform. <br/><br/> What started as an educational endeavour while working on Adobe Flex and the AIR platform, was released to the general public.<br/><br/>This application is considered to be feature complete and is no longer maintained or updated.",
        "buttons": [
          {
            "id": "220101",
            "isPrimary": true,
            "text": "View Project",
            "target": "https://github.com/midhunhk/triton-player"
          }
        ]
      },
      {
        "id": "202",
        "icon": "\\img\\portfolio\\icons\\icon_cryptx.png",
        "title": "Cryptx",
        "featured": false,
        "tags": [
            {
                "id":"1",
                "name":"Adobe Air",
                "className": "is-primary"
            },
            {
                "id":"2",
                "name": "Flash Platform",
                "className": "is-link"
            }
        ],
        "description": "Cryptx is a file encryption/decryption app developed with Adobe Air that uses 128-bit AES Encryption. \nIt was developed as a proof of concept application that uses Green Threads since ActionScript is single threaded.",
        "buttons": [
          {
            "id": "220201",
            "isPrimary": true,
            "text": "View Project",
            "target": "https://github.com/midhunhk/cryptx"
          }
        ]
      }
    ]
  }

// Android Projects
export const androidProjectsData = {
    "categoryId": "1",
    "category": "android",
    "categoryTitle": "Android Projects",
    "projects": [
      {
        "id": "101",
        "icon": "\\img\\portfolio\\icons\\icon_message_counter.png",
        "title": "Message Counter",
        "featured": true,
        "featuredImage": "\\img\\portfolio\\mobile\\message_counter_screens.png",
        "tags": [
            {
                "id":"1",
                "name":"Android",
                "className": "is-primary"
            },
            {
                "id":"2",
                "name": "Travis CI",
                "className": "is-danger"
            }
        ],
        "description": "Message Counter is a modern Android app that counts the number of text messages a user sends. <br/>It has been download more than 1,00,000 times, translated into 5 languages and used in more than 10 countries around the world.<br/><br/>It is now entirely rewritten in Kotlin and makes use of Android Architecture Components and Kotlin Extensions.",
        "buttons": [
            {
                "id": "1",
                "isPrimary": false,
                "text": "View Project",
                "target": "https://github.com/midhunhk/message-counter/"
            },
            {
                "id": "3",
                "isPrimary": false,
                "text": "Case Study",
                "target": "https://midhunhk.github.io/dev/2018/09/12/message-counter-4/"
            },
            {
                "id": "2",
                "isPrimary": true,
                "text": "View Page",
                "target": "https://midhunhk.github.io/message-counter/"
            }
        ]
      },
      {
        "id": "102",
        "icon": "\\img\\portfolio\\icons\\icon_lib_ae_apps.png",
        "title": "lib-aeapps",
        "featured": false,
        "tags": [
            {
                "id":"1",
                "name":"Android",
                "className": "is-primary"
            },
            {
                "id":"2",
                "name": "Travis CI",
                "className": "is-danger"
            }
        ],
        "description": "An Android library for application developers which is constantly improved. Most of the apps created by ae app labs use this library to enable code reuse and faster development cycle.",
        "buttons": [
          {
            "id": "1",
            "isPrimary": true,
            "text": "View Page",
            "target": "https://midhunhk.github.io/lib-aeapps/"
          }
        ]
      },
      {
        "id": "103",
        "icon": "\\img\\portfolio\\icons\\icon_random_contact.png",
        "title": "Random Contact",
        "featured": false,
        "tags": [
            {
                "id":"1",
                "name":"Android",
                "className": "is-primary"
            }
        ],
        "description": "Random Contact is an Android app that shows the details of a random contact from the contacts list. This is an experimental, fun and personal project which is open source. And surprisingly it has a good user base.",
        "buttons": [
          {
            "id": "3",
            "isPrimary": false,
            "text": "Case Study",
            "target": "https://ae-app-labs.github.io/case-studies/random-contact"
          },
          {
            "id": "1",
            "isPrimary": true,
            "text": "View Page",
            "target": "https://midhunhk.github.io/random-contact/"
          }
        ]
      },
      {
        "id": "104",
        "icon": "\\img\\portfolio\\icons\\icon_trip_meter.png",
        "title": "Trip-O-Meter",
        "featured": false,
        "tags": [
            {
                "id":"1",
                "name":"Android",
                "className": "is-primary"
            },
            {
                "id":"2",
                "name": "Travis CI",
                "className": "is-danger"
            }
        ],
        "description": "Trip O Meter was an attempt to integrate multiple features into a single application for managing a trip. It presently includes a fuel cost calculator and expense manager when going with friends. <br/><br/>The development of this project is currently on hold.",
        "buttons": [
          {
            "id": "1",
            "isPrimary": true,
            "text": "View Project",
            "target": "https://midhunhk.github.io/trip-o-meter/"
          }
        ]
      },
      {
        "id": "105",
        "icon": "\\img\\portfolio\\icons\\icon_c19_counter.png",
        "title": "C19 Counter",
        "featured": false,
        "tags": [
            {
                "id":"1",
                "name":"Android",
                "className": "is-primary"
            }
        ],
        "description": "C-19 Counter is a modern Android app with a NodeJS backend to show the daily status of C19 for country or states in India.",
        "buttons": [
          {
            "id": "1",
            "isPrimary": true,
            "text": "View Project",
            "target": "https://github.com/midhunhk/c19-counter-app"
          }
        ]
      }
    ]
  }