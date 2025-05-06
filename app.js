// Model configurations with separate scales for primary and alternate models
const MODELS = [
  {
    id: 'model1',
    name: { 
      english: "MODEL 1", 
      arabic: "مودل 1",
      french: "MODELE 1" 
    },
    assets: {
      primary: 'assets/models/model1/primary.glb',
      alternate: 'assets/models/model1/alternate.glb',
      thumbnail: 'assets/models/model1/thumbnail.png'
    },
    display: {
      primary: {
        baseScale: 1.5,
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 90, z: 0 }
      },
      alternate: {
        baseScale: 1.5,
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 90, z: 0 }
      }
    }
  },


  {
    id: 'model2',
    name: { 
      english: "MODEL 2", 
      arabic: "مودل 2",
      french: "MODELE 2" 
    },
    assets: {
      primary: 'assets/models/model2/primary.glb',
      alternate: 'assets/models/model2/alternate.glb',
      thumbnail: 'assets/models/model2/thumbnail.png'
    },
    display: {
      primary: {
        baseScale: 1.2,
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 180, z: 0 }
      },
      alternate: {
        baseScale: 0.3,
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: -55, z: 0 }
      }
    }
  },

  {
    id: 'model3',
    name: { 
      english: "MODEL 3", 
      arabic: "مودل 3",
      french: "MODELE 3" 
    },
    assets: {
      primary: 'assets/models/model3/primary.glb',
      alternate: 'assets/models/model3/alternate.glb',
      thumbnail: 'assets/models/model3/thumbnail.png'
    },
    display: {
      primary: {
        baseScale: 1.2,
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 }
      },
      alternate: {
        baseScale: 1.2,
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 }
      }
    }
  },

  {
    id: 'model4',
    name: { 
      english: "MODEL 4", 
      arabic: "مودل 4",
      french: "MODELE 4" 
    },
    assets: {
      primary: 'assets/models/model4/primary.glb',
      alternate: 'assets/models/model4/alternate.glb',
      thumbnail: 'assets/models/model4/thumbnail.png'
    },
    display: {
      primary: {
        baseScale: 1.2,
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 }
      },
      alternate: {
        baseScale: 1.2,
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 }
      }
    }
  },

  {
    id: 'model5',
    name: { 
      english: "MODEL 5", 
      arabic: "مودل 5",
      french: "MODELE 5" 
    },
    assets: {
      primary: 'assets/models/model5/primary.glb',
      alternate: 'assets/models/model5/alternate.glb',
      thumbnail: 'assets/models/model5/thumbnail.png'
    },
    display: {
      primary: {
        baseScale: 1.2,
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 80, z: 0 }
      },
      alternate: {
        baseScale: 1.2,
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 30, z: 0 }
      }
    }
  },

  {
    id: 'model6',
    name: { 
      english: "MODEL 6", 
      arabic: "مودل 6",
      french: "MODELE 6" 
    },
    assets: {
      primary: 'assets/models/model6/primary.glb',
      alternate: 'assets/models/model6/alternate.glb',
      thumbnail: 'assets/models/model6/thumbnail.png'
    },
    display: {
      primary: {
        baseScale: 0.8,
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 }
      },
      alternate: {
        baseScale: 0.5,
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 90, z: 0 }
      }
    }
  },

  {
    id: 'model7',
    name: { 
      english: "MODEL 7", 
      arabic: "مودل 7",
      french: "MODELE 7" 
    },
    assets: {
      primary: 'assets/models/model7/primary.glb',
      alternate: 'assets/models/model7/alternate.glb',
      thumbnail: 'assets/models/model7/thumbnail.png'
    },
    display: {
      primary: {
        baseScale: 1.2,
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: -90, z: 0 }
      },
      alternate: {
        baseScale: 0.8,
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 90, z: 0 }
      }
    }
  },

  {
    id: 'model8',
    name: { 
      english: "MODEL 8", 
      arabic: "مودل 8",
      french: "MODELE 8" 
    },
    assets: {
      primary: 'assets/models/model8/primary.glb',
      alternate: 'assets/models/model8/alternate.glb',
      thumbnail: 'assets/models/model8/thumbnail.png'
    },
    display: {
      primary: {
        baseScale: 1.2,
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 }
      },
      alternate: {
        baseScale: 0.4,
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 90, z: 0 }
      }
    }
  },

  {
    id: 'model9',
    name: { 
      english: "MODEL 9", 
      arabic: "مودل 9",
      french: "MODELE 9" 
    },
    assets: {
      primary: 'assets/models/model9/primary.glb',
      alternate: 'assets/models/model9/alternate.glb',
      thumbnail: 'assets/models/model9/thumbnail.png'
    },
    display: {
      primary: {
        baseScale: 1.2,
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 }
      },
      alternate: {
        baseScale: 0.4,
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 }
      }
    }
  },

  {
    id: 'model10',
    name: { 
      english: "MODEL 10", 
      arabic: "مودل 10",
      french: "MODELE 10" 
    },
    assets: {
      primary: 'assets/models/model10/primary.glb',
      alternate: 'assets/models/model10/alternate.glb',
      thumbnail: 'assets/models/model10/thumbnail.png'
    },
    display: {
      primary: {
        baseScale: 1.2,
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 }
      },
      alternate: {
        baseScale: 0.4,
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 90, z: 0 }
      }
    }
  },

  {
    id: 'model11',
    name: { 
      english: "MODEL 11", 
      arabic: "مودل 11",
      french: "MODELE 11" 
    },
    assets: {
      primary: 'assets/models/model11/primary.glb',
      alternate: 'assets/models/model11/alternate.glb',
      thumbnail: 'assets/models/model11/thumbnail.png'
    },
    display: {
      primary: {
        baseScale: 1.2,
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 }
      },
      alternate: {
        baseScale: 0.7,
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 90, z: 0 }
      }
    }
  },

  {
    id: 'model12',
    name: { 
      english: "MODEL 12", 
      arabic: "مودل 12",
      french: "MODELE 12" 
    },
    assets: {
      primary: 'assets/models/model12/primary.glb',
      alternate: 'assets/models/model12/alternate.glb',
      thumbnail: 'assets/models/model12/thumbnail.png'
    },
    display: {
      primary: {
        baseScale: 1.2,
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 }
      },
      alternate: {
        baseScale: 0.6,
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 90, z: 0 }
      }
    }
  },

  {
    id: 'model13',
    name: { 
      english: "MODEL 13", 
      arabic: "مودل 13",
      french: "MODELE 13" 
    },
    assets: {
      primary: 'assets/models/model13/primary.glb',
      alternate: 'assets/models/model13/alternate.glb',
      thumbnail: 'assets/models/model13/thumbnail.png'
    },
    display: {
      primary: {
        baseScale: 1.2,
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 }
      },
      alternate: {
        baseScale: 0.4,
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 90, z: 0 }
      }
    }
  },
]

// Application State Manager
// State management
const state = {
  currentModelIndex: 0,
  currentVariant: 'primary',
  currentLanguage: 'english',
  currentScale: 1.0,
  isAnimating: false,
/*   isMobile: /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
 */};

// DOM elements
const elements = {
  scene: document.querySelector('a-scene'),
  modelContainer: document.getElementById('model-container'),
  modelSelector: document.getElementById('model-selector'),
  toggleModelBtn: document.getElementById('toggle-model'),
  toggleLangBtn: document.getElementById('toggle-lang'),
  modelScaleInput: document.getElementById('model-scale'),
  modelScaleValue: document.getElementById('model-scale-value'),
  modelPopup: document.getElementById('model-popup'),
  modelName: document.getElementById('model-name')
};

// Initialize the app
function init() {
  setupEventListeners();
  initThumbnails();
  loadModel();
  showModelName();
}

// Setup event listeners
function setupEventListeners() {
  elements.toggleModelBtn.addEventListener('click', toggleVariant);
  elements.toggleLangBtn.addEventListener('click', toggleLanguage);
  
  elements.modelScaleInput.addEventListener('input', (e) => {
    state.currentScale = parseFloat(e.target.value);
    elements.modelScaleValue.textContent = state.currentScale.toFixed(2);
    updateModelScale();
  });
  
  // Handle mobile device orientation
  if (state.isMobile) {
    window.addEventListener('deviceorientation', handleOrientation, true);
  }
}

// Handle device orientation for mobile
function handleOrientation(event) {
  if (state.isAnimating) return;
  
  const model = elements.modelContainer.children[0];
  if (!model) return;
  
  const beta = event.beta || 0;   // -180 to 180 (front/back tilt)
  const gamma = event.gamma || 0; // -90 to 90 (left/right tilt)
  
  // Adjust model position slightly based on device tilt
  const adjustX = gamma * 0.01;
  const adjustY = beta * 0.005;
  
  const currentPos = model.getAttribute('position');
  model.setAttribute('position', {
    x: currentPos.x + adjustX,
    y: currentPos.y + adjustY,
    z: currentPos.z
  });
}

// Initialize thumbnail selector
function initThumbnails() {
  MODELS.forEach((model, index) => {
    const thumb = document.createElement('img');
    thumb.src = model.assets.thumbnail;
    thumb.classList.add('thumbnail');
    thumb.addEventListener('click', () => {
      if (state.isAnimating) return;
      state.currentModelIndex = index;
      state.currentScale = model.display[state.currentVariant].baseScale;
      updateScaleDisplay();
      animateModelChange();
      showModelName();
    });
    elements.modelSelector.appendChild(thumb);
  });
}

// Load current model
function loadModel() {
  const model = MODELS[state.currentModelIndex];
  const variant = state.currentVariant;
  const config = model.display[variant];
  
  // Clear previous model
  elements.modelContainer.innerHTML = '';
  
  // Create new model entity
  const modelEntity = document.createElement('a-entity');
  modelEntity.setAttribute('gltf-model', `url(${model.assets[variant]})`);
  modelEntity.setAttribute('position', `${config.position.x} ${config.position.y} ${config.position.z}`);
  modelEntity.setAttribute('rotation', `${config.rotation.x} ${config.rotation.y} ${config.rotation.z}`);
  modelEntity.setAttribute('scale', `${state.currentScale} ${state.currentScale} ${state.currentScale}`);
  
  // Add rotation animation
  modelEntity.setAttribute('animation__rotate', {
    property: 'rotation.y',
    to: 360,
    dur: 20000,
    loop: true,
    easing: 'linear'
  });
  
  elements.modelContainer.appendChild(modelEntity);
  animateEntrance(modelEntity);
}

// Animate model entrance
function animateEntrance(modelEntity) {
  state.isAnimating = true;
  modelEntity.object3D.scale.set(0.01, 0.01, 0.01);
  
  gsap.to(modelEntity.object3D.scale, {
    x: state.currentScale,
    y: state.currentScale,
    z: state.currentScale,
    duration: 0.8,
    ease: "elastic.out(1, 0.5)",
    onComplete: () => {
      state.isAnimating = false;
    }
  });
}

// Update model scale
function updateModelScale() {
  const model = elements.modelContainer.children[0];
  if (model) {
    model.setAttribute('scale', `${state.currentScale} ${state.currentScale} ${state.currentScale}`);
  }
}

// Toggle between primary/alternate models
function toggleVariant() {
  if (state.isAnimating) return;
  state.currentVariant = state.currentVariant === 'primary' ? 'alternate' : 'primary';
  state.currentScale = MODELS[state.currentModelIndex].display[state.currentVariant].baseScale;
  updateScaleDisplay();
  animateModelChange();
  showModelName();
}

// Cycle through languages
function toggleLanguage() {
  if (state.isAnimating) return;
  const languages = ['english', 'arabic', 'french'];
  const currentIndex = languages.indexOf(state.currentLanguage);
  state.currentLanguage = languages[(currentIndex + 1) % languages.length];
  showModelName();
}

// Show model name in popup
function showModelName() {
  const model = MODELS[state.currentModelIndex];
  elements.modelName.textContent = model.name[state.currentLanguage];
  
  elements.modelPopup.classList.add('show');
  setTimeout(() => {
    elements.modelPopup.classList.remove('show');
  }, 3000);
}

// Update scale display
function updateScaleDisplay() {
  elements.modelScaleInput.value = state.currentScale;
  elements.modelScaleValue.textContent = state.currentScale.toFixed(2);
}

// Animated model change
function animateModelChange() {
  if (state.isAnimating) return;
  state.isAnimating = true;
  
  gsap.to(elements.modelContainer.object3D.position, {
    y: -0.5,
    duration: 0.3,
    onComplete: () => {
      loadModel();
      gsap.to(elements.modelContainer.object3D.position, {
        y: 0,
        duration: 0.3,
        onComplete: () => {
          state.isAnimating = false;
        }
      });
    }
  });
}

// Start the app
window.addEventListener('DOMContentLoaded', init);