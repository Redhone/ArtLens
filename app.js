// Model configurations with separate scales for primary and alternate models
const MODELS = [
  {
    id: 'model1',
    name: { 
      english: "Memoria presbyteri Felicis, vi/xit ---.", 
      arabic: "قبر الكاهن فيليكس، عاش في نهاية القرن الرابع وبداية القرن الخامس",
      french: "Tombe du prétre Félix, Il a vécu au fin du IVe- début du Ve siècle" 
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
      english: "Memoria [---]. Decessit pridie [Kalendas / Nonas / Idus] [mensis] [---].", 
      arabic: "قبر ...، (هو / هي) غادر(ت) ليلة، في أواخر القرن الرابع وبداية القرن الخامس الميلادي.",
      french: "Tombe de... Il (ou elle) s’en est allé(e) la veille des Calendes. Fin du IVᵉ – début du Vᵉ siècle." 
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
      english: "Memoria Migninae, vixit annos IV dies VI. Recessit die III Nonas Iulias anno provinciae CCCXC", 
      arabic: "قبر مجينا التي عاشت أربعة أشهر وستة أيام، غادرت في اليوم الثالث من العشر الأوائل لشهر يوليو سنة المقاطعة 390 (3 يوليو 129 م)",
      french: "Tombe de Miggina. Elle a vécu un an, quatre mois, six jours. Elle s’en est allée le 3e jour des nones de juillet, l'année de la province 390 (3juillet 429 ap. J.-C.)." 
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
      english: "Gallica, infans, in pace decessit. Vixit menses IV. Huic mater memoriam [posuit / fecit]", 
      arabic: "حاليكا الرضيعة، غادرت في أمان الله. عاشت شهراً واحداً. والدتها هي التي بنت لها هذا القبر. نهاية القرن الرابع وبداية القرن الخامس الميلادي",
      french: "Gallica, un bébé, s’en est allée dans la paix (du Seigneur). Elle a vécu quatre mois. C’est sa mère qui lui a fail faire cette tombe. Fin du IVe- début du Ve siècle." 
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
      english: "Memoria Adcodati, depositus est die XI Kalendas Iunias, anno provinciae CCCXC.", 
      arabic: "قبر أديوداتوس، الذي دُفن في اليوم الحادي عشر من أوائل شهر جوان، في سنة 390 حسب التقويم المحلي للمقاطعة، الموافق 21 ماي سنة 129 ميلاديًا",
      french: "Tombe de Adéodatus. Il a été enseveli le 11e jour des calendes de juin, l'année de la province 390 (soit le 21 mai 429 ap.J.-C.)." 
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
      english: "Memoria Mariae Equitiolae, quae et Silica, vixit annis XXVIIII. Praecessit in pace die pridie Idus Martias, anno provinciae CCCLIIII.", 
      arabic: "قبر ماريا كويتيولا، الملقبة بسيليكا، التي عاشت 29 سنة. غادرت في أمان الله ليلة منتصف شهر مارس، سنة المقاطعة 354 (14 مارس 393 م)",
      french: "Tombe de Maria Equitiola, surnommée Siliqua. Elle a vécuvingt-neuf ans. Elle s’en est allée dans la paix (du Seigneur) la velle des ides de mars, larmée de la province 354 (14 mars 393 ap. J.-C).Fin du IVe- début du Vesiècle" 
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
      english: "Sepulcrum (...) Anii. Finis saeculi IV - initium saeculi V.", 
      arabic: "قبر... أنوس، نهاية القرن الرابع وبداية القرن الخامس",
      french: "Tombe de (...) Anus. Fin du IVe - début du Ve siècle" 
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
      english: "Adeodatus vixit annos --- menses --- III, anno provinciae CCC.", 
      arabic: "ادبود أتوس عاش ... (سنة ؟) (...) 3 أشهر سنة المقاطعة 5300 (339) + ....؟ م",
      french: "Adéudatus a vécu ...(ans 3,)(.. +)3 mois.Année de la province 300+ ?(339+...? ap. J.-C.)]." 
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
      english: "Memoria [---l]iani. Vixit annis XXII. [Depositus die ---].", 
      arabic: "قبر إيانوس. عاش 22 سنة. توفي في اليوم الثاني والعشرين من شهر [---]، سنة [---]، الموافق لسنة [---] من تقويم المقاطعة",
      french: "Tombe de Jianus. Il a vécu 22 ans, ou peut-être 22 jours, ou encore [x] ans, [y] mois et 22 jours. Il est également possible qu’il soit mort en l’an 22 de l’ère provinciale." 
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
      english: "Cresconia fidelis, vixit in pace, obiit annis VI, pridie Idus Iunias, anno provinciae CCCXXXVIIII.", 
      arabic: "قبر كرسونيا، المسيحية الوفية، التي عاشت في أمان الله، توفيت في سن السادسة، ليلة أواخر شهر جوان، في سنة المقاطعة 339، الموافق 12 جوان 378 م",
      french: "Cresconia, fidèle chrétienne, a vécu dans la paix(du Seigneur). Elle est morte à l’âge de six ans, la veille des ides de juin, l'année de la province 339(12 juin 378ap. ).-C.). " 
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
      english: "Musivum cum torquata duplici quae delimitat campos ornamentis geometricis et vegetalibus stylizatis decoratos; margo cum linea postium", 
      arabic: "فسيفساء تحتوي على ضفيرة مزدوجة الحبل تحدد حقولاً مزخرفة بزخارف هندسية ونباتية منمقة؛ يحيط بها إطار ذو خط من العقود",
      french: "Mosaïque avec une tresse à deux brins délimitant des champs qui contiennent un décor géométrique el végétal stylisé ; bordure á ligne de postes." 
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
      english: "Memoria Aesculapii, qui vixit fidelis.", 
      arabic: "قبر إسكالبيوس الذي عاش مسيحياً في نهاية القرن الرابع الميلادي وبداية القرن الخامس الميلادي",
      french: "Tombe d'Esculape, qui a vécu en fidèle chrétien, à la fin du IVe siècle et au début du Ve siècle." 
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
      english: "Musivum cum ornatu orthogonali taliariorum coniunctorum, adiacentium et oppositorum", 
      arabic: "فسيفساء بزخرفة هندسية من عظام النرد المتشابكة والمتجاورة والمتقابلة",
      french: "Mosaïque avec un décor orthogonal d'osselets emboités, adjacents et opposés." 
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
    dur: 2000,
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
  }, 7000);
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