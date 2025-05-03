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




];

// State management
let currentState = {
  modelIndex: 0,
  variant: 'primary',
  language: 'english',
  currentScale: {
    primary: MODELS[0].display.primary.baseScale,
    alternate: MODELS[0].display.alternate.baseScale
  },
  isAnimating: false
};

// DOM elements
const elements = {
  scene: document.querySelector('a-scene'),
  modelContainer: document.getElementById('model-container'),
  sceneRoot: document.getElementById('scene-root'),
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
  initThumbnails();
  initEventListeners();
  loadCurrentModel();
  showModelName();
}

// Create thumbnail selector
function initThumbnails() {
  MODELS.forEach((model, index) => {
    const thumb = document.createElement('img');
    thumb.src = model.assets.thumbnail;
    thumb.classList.add('thumbnail');
    thumb.addEventListener('click', () => {
      if (!currentState.isAnimating) {
        currentState.modelIndex = index;
        currentState.currentScale.primary = model.display.primary.baseScale;
        currentState.currentScale.alternate = model.display.alternate.baseScale;
        updateScaleValues();
        animateModelChange();
        showModelName();
      }
    });
    elements.modelSelector.appendChild(thumb);
  });
}

// Set up event listeners
function initEventListeners() {
  elements.toggleModelBtn.addEventListener('click', toggleModelVariant);
  elements.toggleLangBtn.addEventListener('click', toggleLanguage);
  
  elements.modelScaleInput.addEventListener('input', (e) => {
    const scale = parseFloat(e.target.value);
    currentState.currentScale[currentState.variant] = scale;
    elements.modelScaleValue.textContent = scale.toFixed(2);
    updateModelScale();
  });
}

// Update UI scale displays
function updateScaleValues() {
  const currentScale = currentState.currentScale[currentState.variant];
  elements.modelScaleInput.value = currentScale;
  elements.modelScaleValue.textContent = currentScale.toFixed(2);
}

// Load current model
function loadCurrentModel() {
  const model = MODELS[currentState.modelIndex];
  const variant = currentState.variant;
  const variantConfig = model.display[variant];
  
  // Clear previous model
  elements.modelContainer.innerHTML = '';
  
  // Create new model entity
  const modelEntity = document.createElement('a-entity');
  modelEntity.setAttribute('gltf-model', `url(${model.assets[variant]})`);
  modelEntity.setAttribute('position', 
    `${variantConfig.position.x} ${variantConfig.position.y} ${variantConfig.position.z}`);
  modelEntity.setAttribute('rotation',
    `${variantConfig.rotation.x} ${variantConfig.rotation.y} ${variantConfig.rotation.z}`);
  
  const scale = currentState.currentScale[variant];
  modelEntity.setAttribute('scale', `${scale} ${scale} ${scale}`);
  
  // Add rotation animation
  modelEntity.setAttribute('animation__rotate', {
    property: 'position.y',
    to: 0.5,
    dur: 2000,
    loop: true,
    easing: 'linear'
  });
  
  elements.modelContainer.appendChild(modelEntity);
  animateEntrance(modelEntity);
}

// Show model name in popup
function showModelName() {
  const model = MODELS[currentState.modelIndex];
  elements.modelName.textContent = model.name[currentState.language];
  
  elements.modelPopup.classList.add('show');
  setTimeout(() => {
    elements.modelPopup.classList.remove('show');
  }, 3000);
}

// Animate model entrance
function animateEntrance(modelEntity) {
  currentState.isAnimating = true;
  modelEntity.object3D.scale.set(0.01, 0.01, 0.01);
  
  const targetScale = currentState.currentScale[currentState.variant];
  gsap.to(modelEntity.object3D.scale, {
    x: targetScale,
    y: targetScale,
    z: targetScale,
    duration: 0.8,
    ease: "elastic.out(1, 0.5)",
    onComplete: () => {
      currentState.isAnimating = false;
    }
  });
}

// Update model scale in real-time
function updateModelScale() {
  const modelEntity = elements.modelContainer.children[0];
  if (modelEntity) {
    const scale = currentState.currentScale[currentState.variant];
    modelEntity.setAttribute('scale', `${scale} ${scale} ${scale}`);
  }
}

// Toggle between primary/alternate models
function toggleModelVariant() {
  if (currentState.isAnimating) return;
  currentState.variant = currentState.variant === 'primary' ? 'alternate' : 'primary';
  updateScaleValues();
  animateModelChange();
  showModelName();
}

// Cycle through languages
function toggleLanguage() {
  if (currentState.isAnimating) return;
  const languages = ['english', 'arabic', 'french'];
  const currentIndex = languages.indexOf(currentState.language);
  currentState.language = languages[(currentIndex + 1) % languages.length];
  showModelName();
}

// Animated model change
function animateModelChange() {
  if (currentState.isAnimating) return;
  currentState.isAnimating = true;
  
  gsap.to(elements.sceneRoot.object3D.position, {
    y: -0.5,
    duration: 0.5,
    onComplete: () => {
      loadCurrentModel();
      gsap.to(elements.sceneRoot.object3D.position, {
        y: 0,
        duration: 0.5
      });
    }
  });
}

// Start the app
init();