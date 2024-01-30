import React, { useEffect } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import './WebBuilder.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function GrapesEditor() {
  useEffect(() => {
    const projectID = sessionStorage.getItem("uid");
    const token = sessionStorage.getItem("token");
    const projectEndpoint = `http://localhost:3003/project/${projectID}`;

    const editor = grapesjs.init({
      container: "#gjs",
      fromElement: false,
      components: '<h1 style="text-align: center; color: saddlebrown">Welcome!</h1>',
      height: "100vh",
      width: "auto",
    
      blockManager: {
        appendTo: "#blocks",
      },
    
      panels: {
        
        defaults: [
    
          {
            id: "layers",
            el: ".panel__right",
            // Make the panel resizable
            resizable: {
              maxDim: 350,
              minDim: 200,
              tc: 0, // Top handler
              cl: 1, // Left handler
              cr: 0, // Right handler
              bc: 0, // Bottom handler
              keyWidth: "flex-basis",
            },
          },
          {
            id: 'panel-switcher',
            el: '.panel__switcher',
            buttons: [{
                id: 'show-layers',
                active: true,
                label: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-layers" viewBox="0 0 16 16">
                <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0zM8 9.433 1.562 6 8 2.567 14.438 6z"/>
              </svg>`,
                command: 'show-layers',
                // Once activated disable the possibility to turn it off
                togglable: false,
              }, {
                id: 'show-style',
                active: true,
                label: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filetype-css" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.397 14.841a1.13 1.13 0 0 0 .401.823q.195.162.478.252.284.091.665.091.507 0 .859-.158.354-.158.539-.44.187-.284.187-.656 0-.336-.134-.56a1 1 0 0 0-.375-.357 2 2 0 0 0-.566-.21l-.621-.144a1 1 0 0 1-.404-.176.37.37 0 0 1-.144-.299q0-.234.185-.384.188-.152.512-.152.214 0 .37.068a.6.6 0 0 1 .246.181.56.56 0 0 1 .12.258h.75a1.1 1.1 0 0 0-.2-.566 1.2 1.2 0 0 0-.5-.41 1.8 1.8 0 0 0-.78-.152q-.439 0-.776.15-.337.149-.527.421-.19.273-.19.639 0 .302.122.524.124.223.352.367.228.143.539.213l.618.144q.31.073.463.193a.39.39 0 0 1 .152.326.5.5 0 0 1-.085.29.56.56 0 0 1-.255.193q-.167.07-.413.07-.175 0-.32-.04a.8.8 0 0 1-.248-.115.58.58 0 0 1-.255-.384zM.806 13.693q0-.373.102-.633a.87.87 0 0 1 .302-.399.8.8 0 0 1 .475-.137q.225 0 .398.097a.7.7 0 0 1 .272.26.85.85 0 0 1 .12.381h.765v-.072a1.33 1.33 0 0 0-.466-.964 1.4 1.4 0 0 0-.489-.272 1.8 1.8 0 0 0-.606-.097q-.534 0-.911.223-.375.222-.572.632-.195.41-.196.979v.498q0 .568.193.976.197.407.572.626.375.217.914.217.439 0 .785-.164t.55-.454a1.27 1.27 0 0 0 .226-.674v-.076h-.764a.8.8 0 0 1-.118.363.7.7 0 0 1-.272.25.9.9 0 0 1-.401.087.85.85 0 0 1-.478-.132.83.83 0 0 1-.299-.392 1.7 1.7 0 0 1-.102-.627zM6.78 15.29a1.2 1.2 0 0 1-.111-.449h.764a.58.58 0 0 0 .255.384q.106.073.25.114.142.041.319.041.245 0 .413-.07a.56.56 0 0 0 .255-.193.5.5 0 0 0 .085-.29.39.39 0 0 0-.153-.326q-.152-.12-.463-.193l-.618-.143a1.7 1.7 0 0 1-.539-.214 1 1 0 0 1-.351-.367 1.1 1.1 0 0 1-.123-.524q0-.366.19-.639.19-.272.527-.422t.777-.149q.456 0 .779.152.326.153.5.41.18.255.2.566h-.75a.56.56 0 0 0-.12-.258.6.6 0 0 0-.246-.181.9.9 0 0 0-.37-.068q-.324 0-.512.152a.47.47 0 0 0-.184.384q0 .18.143.3a1 1 0 0 0 .404.175l.621.143q.326.075.566.211t.375.358.135.56q0 .37-.188.656a1.2 1.2 0 0 1-.539.439q-.351.158-.858.158-.381 0-.665-.09a1.4 1.4 0 0 1-.478-.252 1.1 1.1 0 0 1-.29-.375"/>
              </svg>`,
                command: 'show-styles',
                togglable: false,
            }],
          }
        ],
        
      },
    
      selectorManager: {
        appendTo: '.styles-container'
      },
    
     
      styleManager: {
        appendTo: '.styles-container',
        sectors: [{
            name: 'Dimension',
            open: false,
            // Use built-in properties
            buildProps: ['width', 'min-height', 'padding'],
            // Use `properties` to define/override single property
            properties: [
              {
                // Type of the input,
                // options: integer | radio | select | color | slider | file | composite | stack
                type: 'integer',
                name: 'The width', // Label for the property
                property: 'width', // CSS property (if buildProps contains it will be extended)
                units: ['px', '%'], // Units, available only for 'integer' types
                defaults: 'auto', // Default value
                min: 0, // Min value, available only for 'integer' types
              }
            ]
          },{
            name: 'Extra',
            open: false,
            buildProps: ['background-color', 'box-shadow', 'custom-prop'],
            properties: [
              {
                id: 'custom-prop',
                name: 'Custom Label',
                property: 'font-size',
                type: 'select',
                defaults: '32px',
                // List of options, available only for 'select' and 'radio'  types
                options: [
                  { value: '12px', name: 'Tiny' },
                  { value: '18px', name: 'Medium' },
                  { value: '32px', name: 'Big' },
                ],
             }
            ]
          }]
      },
    
      
      layerManager: {
        appendTo: ".layers-container",
      },

      storageManager: {
        type: 'remote',
        autosave: true, // Store data automatically
        autoload: true, // Autoload stored data on init
        stepsBeforeSave: 1,
        options: {
          remote: {
            urlLoad: projectEndpoint,
            urlStore: projectEndpoint,

            fetchOptions: opts => {
              const headers = new Headers(opts.headers || {});
              headers.set('Authorization', `Bearer ${token}`); // Set your token here
      
              // Customize fetchOptions based on the request method
              if (opts.method === 'GET') {
                return {
                  ...opts,
                  method: 'GET',
                  headers,
                };
              } else if (opts.method === 'POST') {
                // For POST requests, use PATCH method
                return {
                  ...opts,
                  method: 'PATCH',
                  headers,
                };
              }
      
              return opts; // For other methods, return the original options
            },
            // As the API stores projects in this format `{id: 1, data: projectData }`,
            // we have to properly update the body before the store and extract the
            // project data from the response result.
            onStore: data =>{
              console.log("STORING", JSON.stringify({...data, id: Date.now()}));
              // return {data: JSON.stringify({...data, id: Date.now()})}
              // return { id: projectID, data }},
            },
            onLoad: result => {
              try {
                console.log("LOADING", result);
                // return result.data;
              } catch (error) {
                console.error('Error loading data:', error);
                // throw error; // Rethrow the error to indicate failure
              }
            }
          }
        }
      }
    });
    
    editor.Panels.addPanel({
      id: "panel-top",
      el: ".panel__top",
    });
    editor.Panels.addPanel({
      id: "basic-actions",
      el: ".panel__basic-actions",
      buttons: [
        {
          id: "visibility",
          active: true, // active by default
          className: "btn-toggle-borders",
          label: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightbulb" viewBox="0 0 16 16">
          <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1"/>
        </svg>`,
          command: "sw-visibility", // Built-in command
        },
        {
          id: "export",
          className: "btn-open-export",
          label: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
        </svg>`,
          command: "export-template",
          context: "export-template", // For grouping context of buttons from the same panel
        },
        {
          id: "show-json",
          label: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code" viewBox="0 0 16 16">
          <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z"/>
        </svg>`,
          className: "btn-show-json",
          context: "show-json",
          command(editor) {
            editor.Modal.setTitle("Components JSON")
              .setContent(
                `<textarea style="width:100%; height: 250px;">
                      ${JSON.stringify(editor.getComponents())}
                    </textarea>`
              )
              .open();
          },
        },
      ],
    });
    
    
    editor.BlockManager.add('Heading', {
      label: 'Heading',
      category: {
        id: 'Typography',
        label: 'Typography',
        open: false,
      },
      content: `<span>
            <h1 style="">Heading</h1>
            </span>`,
    })
    
    editor.BlockManager.add('Paragraph', {
      label: 'paragraph',
      category: 'Typography',
      content: `<section>
            <p style="">paragraph</p>
            </section>`
    })
    
    editor.BlockManager.add('Image', {
      label: 'Image',
      category: {
        id: 'Media',
        label: 'Media',
        open: false,
      },
      content: {type:'image'},
      activate: true,
    })
    
    editor.BlockManager.add('Video', {
      label: 'Video',
      category: 'Media',
      content: {type:'video'},
      activate: true,
    })
    
    editor.BlockManager.add('Audio', {
      label: 'Audio',
      category: 'Media',
      content: `
                <audio controls>
                   <source src="" type="audio/ogg">
                   <source src="" type="audio/mpeg">
                   Your browser does not support the audio tag.
                </audio>
                `,
    })
    
    editor.BlockManager.add('Navbar', {
      label: 'Navbar',
      category: {
        id: 'Navigation',
        label: 'Navigation',
        open: false,
      },
      content: `
      <nav class="navbar navbar-expand-sm bg-light">
    
    <div class="container-fluid">
    <!-- Links -->
    <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#">Link 1</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link 2</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link 3</a>
    </li>
    </ul>
    </div>
    
    </nav>`
    })
    
    editor.BlockManager.add('Button', {
      label: 'Button',
      category: 'Navigation',
      content: `
      <button type="button" class="btn">Button</button>
      `,
    })
    
    editor.BlockManager.add('table', {
      label: 'table',
      category:{
        id: 'table',
        label: 'table',
        open: false,
      },
      content: {type:'table'},
      active: true,
    })
    
    editor.BlockManager.add('thead', {
      label: 'thead',
      category:'table',
      content: {type:'thead'},
      active: true,
    })
    
    editor.BlockManager.add('tbody', {
      label: 'tbody',
      category:'table',
      content: {type:'tbody'},
      active: true,
    })
    
    editor.BlockManager.add('tfoot', {
      label: 'tfoot',
      category:'table',
      content: {type:'tfoot'},
      active: true,
    })
    
    editor.BlockManager.add('Map', {
      label: 'Map',
      category: {
        id: 'Other',
        label: 'Other',
        open: false,
      },
      content: {type:'map'},
      active: true,
    })
    
    editor.BlockManager.add('svg', {
      label: 'svg',
      category:'Other',
      content: {type:'svg'},
      active: true,
    })
    
    
    editor.Commands.add('show-layers', {
      getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
      getLayersEl(row) { return row.querySelector('.layers-container') },
    
      run(editor, sender) {
        const lmEl = this.getLayersEl(this.getRowEl(editor));
        lmEl.style.display = '';
      },
      stop(editor, sender) {
        const lmEl = this.getLayersEl(this.getRowEl(editor));
        lmEl.style.display = 'none';
      },
    });
    editor.Commands.add('show-styles', {
      getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
      getStyleEl(row) { return row.querySelector('.styles-container') },
    
      run(editor, sender) {
        const smEl = this.getStyleEl(this.getRowEl(editor));
        smEl.style.display = '';
      },
      stop(editor, sender) {
        const smEl = this.getStyleEl(this.getRowEl(editor));
        smEl.style.display = 'none';
      },
    });

    return () => {
      editor.destroy(); // Destroy GrapesJS editor when component unmounts
    };

  }, []); // Empty dependency array to run effect only once

  return (
    <>
      <div className="panel__top">
        <div><h1 style={{ color: "wheat" }}>DragDrop!</h1></div>
        <div className="panel__basic-actions"></div>
        <div className="panel__switcher"></div>
      </div>

      <div className="container-fluid">
        <div className="row bg-light">
          <div className="col-sm-2 d-none d-sm-block">
            <div id="blocks"></div>
          </div>

          <div className="col editor-row">
            <div className="editor-canvas">
              <div id="gjs"></div>
            </div>
            <div className="panel__right d-none d-sm-block">
              <div className="layers-container"></div>
              <div className="styles-container"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GrapesEditor;
