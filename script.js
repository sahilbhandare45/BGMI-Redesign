console.clear();
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".Main",
        start: "top top",
        end: "+=120%",
        pin: true,
        scrub: 2,
        markers: false,
      }
    })
    .to(".img-container>.icon-scroll", {
      y:100,
    })
    .to(".img-container>img", {
     
      scale: 2,
      z: 500,
      transformOrigin: "center 30%",
      ease: "power1.inOut",
    })
    .to(
      ".bg-clip",
      {
        scale: 1.4,
        top: 0,
        transformOrigin: "center center",
        ease: "power1.inOut",
      },
      "<"
    )
    .to(".page1", {
      opacity: 1,
    })
    .to(".nav-content", {
      opacity: 1.2,
    })

    .to(".img-container", {
      display: "none",
    });

  
  gsap.to(".container", {
    scrollTrigger: {
      trigger: ".page2",
      scoller:'body',
      start: "top 0%",
      top: "top 100%",
      scrub: 1,
      pin: true,
      duration: 2,
      end: () => "+=" + document.querySelector(".container").scrollWidth,
      snap: 1 / 8, 
      onUpdate: (self) => {
       
        let progress = self.progress;
        let scrollWidth = document.querySelector(".container").scrollWidth;
        gsap.to(".container", {
          x: -progress * (scrollWidth - window.innerWidth),
          ease: "none",
        });
      },
    },
  });

  
var tl;

var tl = gsap.timeline({scrollTrigger:{
  trigger:".page3",
 //  markers:true,
  start:"50% 50%",
  end:"150% 50%",
  scrub:2,
  pin:true
}});
tl
.to(".page3 #center",{
 height: "100vh",
},'a')
.to(".page3 #top",{
  top: "-50%",
},'a')
.to(".page3 #bottom",{
  bottom: "-50%",
},'a')
.to(".page3 #top-h1",{
  top: "60%",
},'a')
.to(".page3 #bottom-h1",{
  bottom: "-30%",
},'a')
.to(".page3 .content",{
 delay: -0.2,
 marginTop: "0%",
})

function canvas(){
  
  const canvas = document.querySelector(".page4-content>canvas");
  const context = canvas.getContext("2d");
  const text = document.querySelector("#text");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
    ./Untitled video - Made with Clipchamp (1)_000.jpg
    ./Untitled video - Made with Clipchamp (1)_001.jpg
    ./Untitled video - Made with Clipchamp (1)_002.jpg
    ./Untitled video - Made with Clipchamp (1)_003.jpg
    ./Untitled video - Made with Clipchamp (1)_004.jpg
    ./Untitled video - Made with Clipchamp (1)_005.jpg
    ./Untitled video - Made with Clipchamp (1)_006.jpg
    ./Untitled video - Made with Clipchamp (1)_007.jpg
    ./Untitled video - Made with Clipchamp (1)_008.jpg
    ./Untitled video - Made with Clipchamp (1)_009.jpg
    ./Untitled video - Made with Clipchamp (1)_010.jpg
    ./Untitled video - Made with Clipchamp (1)_011.jpg
    ./Untitled video - Made with Clipchamp (1)_012.jpg
    ./Untitled video - Made with Clipchamp (1)_013.jpg
    ./Untitled video - Made with Clipchamp (1)_014.jpg
    ./Untitled video - Made with Clipchamp (1)_015.jpg
    ./Untitled video - Made with Clipchamp (1)_016.jpg
    ./Untitled video - Made with Clipchamp (1)_017.jpg
    ./Untitled video - Made with Clipchamp (1)_018.jpg
    ./Untitled video - Made with Clipchamp (1)_019.jpg
    ./Untitled video - Made with Clipchamp (1)_020.jpg
    ./Untitled video - Made with Clipchamp (1)_021.jpg
    ./Untitled video - Made with Clipchamp (1)_022.jpg
    ./Untitled video - Made with Clipchamp (1)_023.jpg
    ./Untitled video - Made with Clipchamp (1)_024.jpg
    ./Untitled video - Made with Clipchamp (1)_025.jpg
    ./Untitled video - Made with Clipchamp (1)_026.jpg
    ./Untitled video - Made with Clipchamp (1)_027.jpg
    ./Untitled video - Made with Clipchamp (1)_028.jpg
    ./Untitled video - Made with Clipchamp (1)_029.jpg
    ./Untitled video - Made with Clipchamp (1)_030.jpg
    ./Untitled video - Made with Clipchamp (1)_031.jpg
    ./Untitled video - Made with Clipchamp (1)_032.jpg
    ./Untitled video - Made with Clipchamp (1)_033.jpg
    ./Untitled video - Made with Clipchamp (1)_034.jpg
    ./Untitled video - Made with Clipchamp (1)_035.jpg
    ./Untitled video - Made with Clipchamp (1)_036.jpg
    ./Untitled video - Made with Clipchamp (1)_037.jpg
    ./Untitled video - Made with Clipchamp (1)_038.jpg
    ./Untitled video - Made with Clipchamp (1)_039.jpg
    ./Untitled video - Made with Clipchamp (1)_040.jpg
    ./Untitled video - Made with Clipchamp (1)_041.jpg
    ./Untitled video - Made with Clipchamp (1)_042.jpg
    ./Untitled video - Made with Clipchamp (1)_043.jpg
    ./Untitled video - Made with Clipchamp (1)_044.jpg
    ./Untitled video - Made with Clipchamp (1)_045.jpg
    ./Untitled video - Made with Clipchamp (1)_046.jpg
    ./Untitled video - Made with Clipchamp (1)_047.jpg
    ./Untitled video - Made with Clipchamp (1)_048.jpg
    ./Untitled video - Made with Clipchamp (1)_049.jpg
    ./Untitled video - Made with Clipchamp (1)_050.jpg
    ./Untitled video - Made with Clipchamp (1)_051.jpg
    ./Untitled video - Made with Clipchamp (1)_052.jpg
    ./Untitled video - Made with Clipchamp (1)_053.jpg
    ./Untitled video - Made with Clipchamp (1)_054.jpg
    ./Untitled video - Made with Clipchamp (1)_055.jpg
    ./Untitled video - Made with Clipchamp (1)_056.jpg
    ./Untitled video - Made with Clipchamp (1)_057.jpg
    ./Untitled video - Made with Clipchamp (1)_058.jpg
    ./Untitled video - Made with Clipchamp (1)_059.jpg
    ./Untitled video - Made with Clipchamp (1)_060.jpg
    ./Untitled video - Made with Clipchamp (1)_061.jpg
    ./Untitled video - Made with Clipchamp (1)_062.jpg
    ./Untitled video - Made with Clipchamp (1)_063.jpg
    ./Untitled video - Made with Clipchamp (1)_064.jpg
    ./Untitled video - Made with Clipchamp (1)_065.jpg
    ./Untitled video - Made with Clipchamp (1)_066.jpg
    ./Untitled video - Made with Clipchamp (1)_067.jpg
    ./Untitled video - Made with Clipchamp (1)_068.jpg
    ./Untitled video - Made with Clipchamp (1)_069.jpg
    ./Untitled video - Made with Clipchamp (1)_070.jpg
    ./Untitled video - Made with Clipchamp (1)_071.jpg
    ./Untitled video - Made with Clipchamp (1)_072.jpg
    ./Untitled video - Made with Clipchamp (1)_073.jpg
    ./Untitled video - Made with Clipchamp (1)_074.jpg
    ./Untitled video - Made with Clipchamp (1)_075.jpg
    ./Untitled video - Made with Clipchamp (1)_076.jpg
    ./Untitled video - Made with Clipchamp (1)_077.jpg
    ./Untitled video - Made with Clipchamp (1)_078.jpg
    ./Untitled video - Made with Clipchamp (1)_079.jpg
    ./Untitled video - Made with Clipchamp (1)_080.jpg
    ./Untitled video - Made with Clipchamp (1)_081.jpg
    ./Untitled video - Made with Clipchamp (1)_082.jpg
    ./Untitled video - Made with Clipchamp (1)_083.jpg
    ./Untitled video - Made with Clipchamp (1)_084.jpg
    ./Untitled video - Made with Clipchamp (1)_085.jpg
    ./Untitled video - Made with Clipchamp (1)_086.jpg
    ./Untitled video - Made with Clipchamp (1)_087.jpg
    ./Untitled video - Made with Clipchamp (1)_088.jpg
    ./Untitled video - Made with Clipchamp (1)_089.jpg
    ./Untitled video - Made with Clipchamp (1)_090.jpg
    ./Untitled video - Made with Clipchamp (1)_091.jpg
    ./Untitled video - Made with Clipchamp (1)_092.jpg
    ./Untitled video - Made with Clipchamp (1)_093.jpg
    ./Untitled video - Made with Clipchamp (1)_094.jpg
    ./Untitled video - Made with Clipchamp (1)_095.jpg
    ./Untitled video - Made with Clipchamp (1)_096.jpg
    ./Untitled video - Made with Clipchamp (1)_097.jpg
    ./Untitled video - Made with Clipchamp (1)_098.jpg
    ./Untitled video - Made with Clipchamp (1)_099.jpg
    ./Untitled video - Made with Clipchamp (1)_100.jpg
    ./Untitled video - Made with Clipchamp (1)_101.jpg
    ./Untitled video - Made with Clipchamp (1)_102.jpg
    ./Untitled video - Made with Clipchamp (1)_103.jpg
    ./Untitled video - Made with Clipchamp (1)_104.jpg
    ./Untitled video - Made with Clipchamp (1)_105.jpg
    ./Untitled video - Made with Clipchamp (1)_106.jpg
    ./Untitled video - Made with Clipchamp (1)_107.jpg
    ./Untitled video - Made with Clipchamp (1)_108.jpg
    ./Untitled video - Made with Clipchamp (1)_109.jpg
    ./Untitled video - Made with Clipchamp (1)_110.jpg
    ./Untitled video - Made with Clipchamp (1)_111.jpg
    ./Untitled video - Made with Clipchamp (1)_112.jpg
    ./Untitled video - Made with Clipchamp (1)_113.jpg
    ./Untitled video - Made with Clipchamp (1)_114.jpg
    ./Untitled video - Made with Clipchamp (1)_115.jpg
    ./Untitled video - Made with Clipchamp (1)_116.jpg
    ./Untitled video - Made with Clipchamp (1)_117.jpg
    ./Untitled video - Made with Clipchamp (1)_118.jpg
    ./Untitled video - Made with Clipchamp (1)_119.jpg
    ./Untitled video - Made with Clipchamp (1)_120.jpg
    ./Untitled video - Made with Clipchamp (1)_121.jpg
    ./Untitled video - Made with Clipchamp (1)_122.jpg
    ./Untitled video - Made with Clipchamp (1)_123.jpg
    ./Untitled video - Made with Clipchamp (1)_124.jpg
    ./Untitled video - Made with Clipchamp (1)_125.jpg
    ./Untitled video - Made with Clipchamp (1)_126.jpg
    ./Untitled video - Made with Clipchamp (1)_127.jpg
    ./Untitled video - Made with Clipchamp (1)_128.jpg
    ./Untitled video - Made with Clipchamp (1)_129.jpg
    ./Untitled video - Made with Clipchamp (1)_130.jpg
    ./Untitled video - Made with Clipchamp (1)_131.jpg
    ./Untitled video - Made with Clipchamp (1)_132.jpg
    ./Untitled video - Made with Clipchamp (1)_133.jpg
    ./Untitled video - Made with Clipchamp (1)_134.jpg
    ./Untitled video - Made with Clipchamp (1)_135.jpg
    ./Untitled video - Made with Clipchamp (1)_136.jpg
    ./Untitled video - Made with Clipchamp (1)_137.jpg
    ./Untitled video - Made with Clipchamp (1)_138.jpg
    ./Untitled video - Made with Clipchamp (1)_137.jpg
    ./Untitled video - Made with Clipchamp (1)_138.jpg
    ./Untitled video - Made with Clipchamp (1)_139.jpg
    ./Untitled video - Made with Clipchamp (1)_140.jpg
    ./Untitled video - Made with Clipchamp (1)_141.jpg
    ./Untitled video - Made with Clipchamp (1)_142.jpg
    ./Untitled video - Made with Clipchamp (1)_143.jpg
    ./Untitled video - Made with Clipchamp (1)_144.jpg
    ./Untitled video - Made with Clipchamp (1)_145.jpg
    ./Untitled video - Made with Clipchamp (1)_146.jpg
    ./Untitled video - Made with Clipchamp (1)_147.jpg
    ./Untitled video - Made with Clipchamp (1)_148.jpg
    ./Untitled video - Made with Clipchamp (1)_149.jpg
    ./Untitled video - Made with Clipchamp (1)_150.jpg
    ./Untitled video - Made with Clipchamp (1)_151.jpg
    ./Untitled video - Made with Clipchamp (1)_152.jpg
    ./Untitled video - Made with Clipchamp (1)_153.jpg
    ./Untitled video - Made with Clipchamp (1)_154.jpg
    ./Untitled video - Made with Clipchamp (1)_155.jpg
    ./Untitled video - Made with Clipchamp (1)_156.jpg
    ./Untitled video - Made with Clipchamp (1)_158.jpg
    ./Untitled video - Made with Clipchamp (1)_159.jpg
    ./Untitled video - Made with Clipchamp (1)_160.jpg
    ./Untitled video - Made with Clipchamp (1)_162.jpg
    ./Untitled video - Made with Clipchamp (1)_163.jpg
    ./Untitled video - Made with Clipchamp (1)_164.jpg
    ./Untitled video - Made with Clipchamp (1)_165.jpg
    ./Untitled video - Made with Clipchamp (1)_166.jpg
    ./Untitled video - Made with Clipchamp (1)_167.jpg
    ./Untitled video - Made with Clipchamp (1)_168.jpg
    ./Untitled video - Made with Clipchamp (1)_169.jpg
    ./Untitled video - Made with Clipchamp (1)_170.jpg
    ./Untitled video - Made with Clipchamp (1)_172.jpg
    ./Untitled video - Made with Clipchamp (1)_173.jpg
    ./Untitled video - Made with Clipchamp (1)_174.jpg
    ./Untitled video - Made with Clipchamp (1)_175.jpg
    ./Untitled video - Made with Clipchamp (1)_176.jpg
    ./Untitled video - Made with Clipchamp (1)_177.jpg
    ./Untitled video - Made with Clipchamp (1)_178.jpg
    ./Untitled video - Made with Clipchamp (1)_179.jpg
    ./Untitled video - Made with Clipchamp (1)_180.jpg
    ./Untitled video - Made with Clipchamp (1)_181.jpg
    ./Untitled video - Made with Clipchamp (1)_182.jpg
    ./Untitled video - Made with Clipchamp (1)_183.jpg
    ./Untitled video - Made with Clipchamp (1)_184.jpg
    ./Untitled video - Made with Clipchamp (1)_185.jpg
    ./Untitled video - Made with Clipchamp (1)_186.jpg
    ./Untitled video - Made with Clipchamp (1)_187.jpg
    ./Untitled video - Made with Clipchamp (1)_188.jpg
    ./Untitled video - Made with Clipchamp (1)_189.jpg
    ./Untitled video - Made with Clipchamp (1)_190.jpg
    ./Untitled video - Made with Clipchamp (1)_191.jpg
    ./Untitled video - Made with Clipchamp (1)_192.jpg
    ./Untitled video - Made with Clipchamp (1)_193.jpg
    ./Untitled video - Made with Clipchamp (1)_194.jpg
    ./Untitled video - Made with Clipchamp (1)_195.jpg
    ./Untitled video - Made with Clipchamp (1)_196.jpg
    ./Untitled video - Made with Clipchamp (1)_197.jpg
    ./Untitled video - Made with Clipchamp (1)_198.jpg
    ./Untitled video - Made with Clipchamp (1)_199.jpg
    ./Untitled video - Made with Clipchamp (1)_200.jpg
    ./Untitled video - Made with Clipchamp (1)_201.jpg
    ./Untitled video - Made with Clipchamp (1)_202.jpg
    ./Untitled video - Made with Clipchamp (1)_203.jpg
    ./Untitled video - Made with Clipchamp (1)_204.jpg
    ./Untitled video - Made with Clipchamp (1)_205.jpg
    ./Untitled video - Made with Clipchamp (1)_206.jpg
    ./Untitled video - Made with Clipchamp (1)_207.jpg
    ./Untitled video - Made with Clipchamp (1)_208.jpg
    ./Untitled video - Made with Clipchamp (1)_209.jpg
    ./Untitled video - Made with Clipchamp (1)_210.jpg
    ./Untitled video - Made with Clipchamp (1)_211.jpg
    ./Untitled video - Made with Clipchamp (1)_212.jpg
    ./Untitled video - Made with Clipchamp (1)_213.jpg
    ./Untitled video - Made with Clipchamp (1)_214.jpg
    ./Untitled video - Made with Clipchamp (1)_215.jpg
    ./Untitled video - Made with Clipchamp (1)_216.jpg
    ./Untitled video - Made with Clipchamp (1)_217.jpg
    ./Untitled video - Made with Clipchamp (1)_218.jpg
    ./Untitled video - Made with Clipchamp (1)_219.jpg
    ./Untitled video - Made with Clipchamp (1)_220.jpg
    ./Untitled video - Made with Clipchamp (1)_221.jpg
    ./Untitled video - Made with Clipchamp (1)_222.jpg
    ./Untitled video - Made with Clipchamp (1)_223.jpg
    ./Untitled video - Made with Clipchamp (1)_224.jpg
    ./Untitled video - Made with Clipchamp (1)_225.jpg
    ./Untitled video - Made with Clipchamp (1)_226.jpg
    ./Untitled video - Made with Clipchamp (1)_227.jpg
    ./Untitled video - Made with Clipchamp (1)_228.jpg
    ./Untitled video - Made with Clipchamp (1)_229.jpg
    ./Untitled video - Made with Clipchamp (1)_230.jpg
    ./Untitled video - Made with Clipchamp (1)_231.jpg
    ./Untitled video - Made with Clipchamp (1)_232.jpg
    ./Untitled video - Made with Clipchamp (1)_233.jpg
    ./Untitled video - Made with Clipchamp (1)_234.jpg
    ./Untitled video - Made with Clipchamp (1)_235.jpg
    ./Untitled video - Made with Clipchamp (1)_236.jpg
    ./Untitled video - Made with Clipchamp (1)_237.jpg
    ./Untitled video - Made with Clipchamp (1)_238.jpg
    ./Untitled video - Made with Clipchamp (1)_239.jpg
    ./Untitled video - Made with Clipchamp (1)_240.jpg
    ./Untitled video - Made with Clipchamp (1)_241.jpg
    ./Untitled video - Made with Clipchamp (1)_242.jpg
    ./Untitled video - Made with Clipchamp (1)_243.jpg
    ./Untitled video - Made with Clipchamp (1)_244.jpg
    ./Untitled video - Made with Clipchamp (1)_245.jpg
    ./Untitled video - Made with Clipchamp (1)_246.jpg
    ./Untitled video - Made with Clipchamp (1)_247.jpg
    ./Untitled video - Made with Clipchamp (1)_248.jpg
    ./Untitled video - Made with Clipchamp (1)_249.jpg
    ./Untitled video - Made with Clipchamp (1)_250.jpg
    ./Untitled video - Made with Clipchamp (1)_251.jpg
    ./Untitled video - Made with Clipchamp (1)_252.jpg
    ./Untitled video - Made with Clipchamp (1)_253.jpg
    ./Untitled video - Made with Clipchamp (1)_254.jpg
    ./Untitled video - Made with Clipchamp (1)_255.jpg
    ./Untitled video - Made with Clipchamp (1)_256.jpg
    ./Untitled video - Made with Clipchamp (1)_257.jpg
    ./Untitled video - Made with Clipchamp (1)_258.jpg
    ./Untitled video - Made with Clipchamp (1)_259.jpg
    ./Untitled video - Made with Clipchamp (1)_260.jpg
    ./Untitled video - Made with Clipchamp (1)_261.jpg
    ./Untitled video - Made with Clipchamp (1)_262.jpg
    ./Untitled video - Made with Clipchamp (1)_263.jpg
    ./Untitled video - Made with Clipchamp (1)_264.jpg
    ./Untitled video - Made with Clipchamp (1)_265.jpg
    ./Untitled video - Made with Clipchamp (1)_266.jpg
    ./Untitled video - Made with Clipchamp (1)_267.jpg
    ./Untitled video - Made with Clipchamp (1)_268.jpg
    ./Untitled video - Made with Clipchamp (1)_269.jpg
    ./Untitled video - Made with Clipchamp (1)_270.jpg
    ./Untitled video - Made with Clipchamp (1)_271.jpg
    ./Untitled video - Made with Clipchamp (1)_272.jpg
    ./Untitled video - Made with Clipchamp (1)_273.jpg
    ./Untitled video - Made with Clipchamp (1)_274.jpg
    ./Untitled video - Made with Clipchamp (1)_275.jpg
    ./Untitled video - Made with Clipchamp (1)_276.jpg
    ./Untitled video - Made with Clipchamp (1)_277.jpg
    ./Untitled video - Made with Clipchamp (1)_278.jpg
    ./Untitled video - Made with Clipchamp (1)_279.jpg
    ./Untitled video - Made with Clipchamp (1)_280.jpg
    ./Untitled video - Made with Clipchamp (1)_281.jpg
    ./Untitled video - Made with Clipchamp (1)_282.jpg
    ./Untitled video - Made with Clipchamp (1)_283.jpg
    ./Untitled video - Made with Clipchamp (1)_284.jpg
    ./Untitled video - Made with Clipchamp (1)_285.jpg
    ./Untitled video - Made with Clipchamp (1)_286.jpg
    ./Untitled video - Made with Clipchamp (1)_287.jpg
    ./Untitled video - Made with Clipchamp (1)_288.jpg
    ./Untitled video - Made with Clipchamp (1)_289.jpg
    ./Untitled video - Made with Clipchamp (1)_290.jpg
    ./Untitled video - Made with Clipchamp (1)_291.jpg
    ./Untitled video - Made with Clipchamp (1)_292.jpg
    ./Untitled video - Made with Clipchamp (1)_293.jpg
    ./Untitled video - Made with Clipchamp (1)_294.jpg
    ./Untitled video - Made with Clipchamp (1)_295.jpg
    ./Untitled video - Made with Clipchamp (1)_296.jpg
    ./Untitled video - Made with Clipchamp (1)_297.jpg
    ./Untitled video - Made with Clipchamp (1)_298.jpg
    ./Untitled video - Made with Clipchamp (1)_299.jpg
    ./Untitled video - Made with Clipchamp (1)_300.jpg
    ./Untitled video - Made with Clipchamp (1)_301.jpg
    ./Untitled video - Made with Clipchamp (1)_302.jpg
    ./Untitled video - Made with Clipchamp (1)_303.jpg
    ./Untitled video - Made with Clipchamp (1)_304.jpg
    ./Untitled video - Made with Clipchamp (1)_305.jpg
    ./Untitled video - Made with Clipchamp (1)_306.jpg
    ./Untitled video - Made with Clipchamp (1)_307.jpg
    ./Untitled video - Made with Clipchamp (1)_308.jpg
    ./Untitled video - Made with Clipchamp (1)_309.jpg
    ./Untitled video - Made with Clipchamp (1)_310.jpg
    ./Untitled video - Made with Clipchamp (1)_311.jpg
    ./Untitled video - Made with Clipchamp (1)_312.jpg
    ./Untitled video - Made with Clipchamp (1)_313.jpg
    ./Untitled video - Made with Clipchamp (1)_314.jpg
    ./Untitled video - Made with Clipchamp (1)_315.jpg
    ./Untitled video - Made with Clipchamp (1)_316.jpg
    ./Untitled video - Made with Clipchamp (1)_317.jpg
    ./Untitled video - Made with Clipchamp (1)_318.jpg
    ./Untitled video - Made with Clipchamp (1)_319.jpg
    ./Untitled video - Made with Clipchamp (1)_320.jpg
    ./Untitled video - Made with Clipchamp (1)_321.jpg
    ./Untitled video - Made with Clipchamp (1)_322.jpg
    ./Untitled video - Made with Clipchamp (1)_323.jpg
    ./Untitled video - Made with Clipchamp (1)_324.jpg
    ./Untitled video - Made with Clipchamp (1)_325.jpg
    ./Untitled video - Made with Clipchamp (1)_326.jpg
    ./Untitled video - Made with Clipchamp (1)_327.jpg
    ./Untitled video - Made with Clipchamp (1)_328.jpg
    ./Untitled video - Made with Clipchamp (1)_329.jpg
    ./Untitled video - Made with Clipchamp (1)_330.jpg
    ./Untitled video - Made with Clipchamp (1)_331.jpg
    ./Untitled video - Made with Clipchamp (1)_332.jpg
    ./Untitled video - Made with Clipchamp (1)_333.jpg
    ./Untitled video - Made with Clipchamp (1)_334.jpg
    ./Untitled video - Made with Clipchamp (1)_335.jpg
    ./Untitled video - Made with Clipchamp (1)_336.jpg
    ./Untitled video - Made with Clipchamp (1)_337.jpg
    ./Untitled video - Made with Clipchamp (1)_338.jpg
    ./Untitled video - Made with Clipchamp (1)_339.jpg
    ./Untitled video - Made with Clipchamp (1)_340.jpg
    ./Untitled video - Made with Clipchamp (1)_341.jpg
    ./Untitled video - Made with Clipchamp (1)_342.jpg
    ./Untitled video - Made with Clipchamp (1)_343.jpg
    ./Untitled video - Made with Clipchamp (1)_344.jpg
    ./Untitled video - Made with Clipchamp (1)_345.jpg
    ./Untitled video - Made with Clipchamp (1)_346.jpg
    ./Untitled video - Made with Clipchamp (1)_347.jpg
    ./Untitled video - Made with Clipchamp (1)_348.jpg
    ./Untitled video - Made with Clipchamp (1)_349.jpg
    ./Untitled video - Made with Clipchamp (1)_350.jpg
    ./Untitled video - Made with Clipchamp (1)_351.jpg
    ./Untitled video - Made with Clipchamp (1)_352.jpg
    ./Untitled video - Made with Clipchamp (1)_353.jpg
    ./Untitled video - Made with Clipchamp (1)_354.jpg
    ./Untitled video - Made with Clipchamp (1)_355.jpg
    ./Untitled video - Made with Clipchamp (1)_356.jpg
    ./Untitled video - Made with Clipchamp (1)_357.jpg
    ./Untitled video - Made with Clipchamp (1)_358.jpg
    ./Untitled video - Made with Clipchamp (1)_359.jpg
    ./Untitled video - Made with Clipchamp (1)_360.jpg
    ./Untitled video - Made with Clipchamp (1)_361.jpg
    ./Untitled video - Made with Clipchamp (1)_362.jpg
    ./Untitled video - Made with Clipchamp (1)_363.jpg
    ./Untitled video - Made with Clipchamp (1)_364.jpg
    ./Untitled video - Made with Clipchamp (1)_365.jpg
    ./Untitled video - Made with Clipchamp (1)_366.jpg
    ./Untitled video - Made with Clipchamp (1)_367.jpg
    ./Untitled video - Made with Clipchamp (1)_368.jpg
    ./Untitled video - Made with Clipchamp (1)_369.jpg
    ./Untitled video - Made with Clipchamp (1)_370.jpg
    ./Untitled video - Made with Clipchamp (1)_371.jpg
    ./Untitled video - Made with Clipchamp (1)_372.jpg
    ./Untitled video - Made with Clipchamp (1)_373.jpg
    ./Untitled video - Made with Clipchamp (1)_374.jpg
    ./Untitled video - Made with Clipchamp (1)_375.jpg
    ./Untitled video - Made with Clipchamp (1)_376.jpg
    ./Untitled video - Made with Clipchamp (1)_377.jpg
    ./Untitled video - Made with Clipchamp (1)_378.jpg
    ./Untitled video - Made with Clipchamp (1)_379.jpg
    ./Untitled video - Made with Clipchamp (1)_380.jpg
    ./Untitled video - Made with Clipchamp (1)_381.jpg
    ./Untitled video - Made with Clipchamp (1)_382.jpg
    ./Untitled video - Made with Clipchamp (1)_383.jpg
    ./Untitled video - Made with Clipchamp (1)_384.jpg
    ./Untitled video - Made with Clipchamp (1)_385.jpg
    ./Untitled video - Made with Clipchamp (1)_386.jpg
    ./Untitled video - Made with Clipchamp (1)_387.jpg
    ./Untitled video - Made with Clipchamp (1)_388.jpg
    ./Untitled video - Made with Clipchamp (1)_389.jpg
    ./Untitled video - Made with Clipchamp (1)_390.jpg
    ./Untitled video - Made with Clipchamp (1)_391.jpg
    ./Untitled video - Made with Clipchamp (1)_392.jpg
    ./Untitled video - Made with Clipchamp (1)_393.jpg
    ./Untitled video - Made with Clipchamp (1)_394.jpg
    ./Untitled video - Made with Clipchamp (1)_395.jpg
    ./Untitled video - Made with Clipchamp (1)_396.jpg
    ./Untitled video - Made with Clipchamp (1)_397.jpg
    ./Untitled video - Made with Clipchamp (1)_398.jpg
    ./Untitled video - Made with Clipchamp (1)_399.jpg
    ./Untitled video - Made with Clipchamp (1)_400.jpg
    ./Untitled video - Made with Clipchamp (1)_401.jpg
    ./Untitled video - Made with Clipchamp (1)_402.jpg
    ./Untitled video - Made with Clipchamp (1)_403.jpg
    ./Untitled video - Made with Clipchamp (1)_404.jpg
    ./Untitled video - Made with Clipchamp (1)_405.jpg
    ./Untitled video - Made with Clipchamp (1)_406.jpg
    ./Untitled video - Made with Clipchamp (1)_407.jpg
    ./Untitled video - Made with Clipchamp (1)_408.jpg
    ./Untitled video - Made with Clipchamp (1)_409.jpg
    ./Untitled video - Made with Clipchamp (1)_410.jpg
    ./Untitled video - Made with Clipchamp (1)_411.jpg
    ./Untitled video - Made with Clipchamp (1)_412.jpg
    ./Untitled video - Made with Clipchamp (1)_413.jpg
    ./Untitled video - Made with Clipchamp (1)_414.jpg
    ./Untitled video - Made with Clipchamp (1)_415.jpg
    ./Untitled video - Made with Clipchamp (1)_416.jpg
    ./Untitled video - Made with Clipchamp (1)_417.jpg
    ./Untitled video - Made with Clipchamp (1)_418.jpg
    ./Untitled video - Made with Clipchamp (1)_419.jpg
    ./Untitled video - Made with Clipchamp (1)_420.jpg
    ./Untitled video - Made with Clipchamp (1)_421.jpg
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 421;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  
  
    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: `none`,
      scrollTrigger: {
        scrub: 4,
        trigger: `.page4`,
        start: `top top`,
        end: `800% bottom`,
        scroller: `body`,
      },
      onUpdate: render,
    });
    
    
    images[1].onload = render;
    
    function render() {
      scaleImage(images[imageSeq.frame], context);
    }
    
    function scaleImage(img, ctx) {
      var canvas = ctx.canvas;
      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.max(hRatio, vRatio);
      var centerShift_x = (canvas.width - img.width * ratio) / 2;
      var centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }
    ScrollTrigger.create({
    
      trigger: ".page4",
      pin: true,
      scroller: `body`,
      start: `top top`,
      end: `800% bottom`,
    });
    
  
  }  
canvas();


});

$(document).ready(function () {
  $.fn.darkenScroll = function () {
    var elem = $(this);
    self = this;

    $(window).on("scroll", function () {
      scroll = $(document).scrollTop();
      offsetTop = elem.offset().top + elem.outerHeight();
      opacity = (1 / offsetTop) * scroll;
      if (opacity > 0 && opacity < 1) {
        elem.css({
          "box-shadow": "10000px 0 0 0 rgba(0,0,0," + opacity + ") inset",
        });
      }
    });
  };
  $(".section.page1").darkenScroll();
});
const herocontent = document.querySelector(".hero-content");
herocontent.addEventListener("mousemove", handleMouseMove);
window.addEventListener("resize", handleWindowResize);

const spansSlow = document.querySelectorAll(".spanSlow");
const spansFast = document.querySelectorAll(".spanFast");

let width = window.innerWidth;

function handleMouseMove(e) {
  let normalizedPosition = e.pageX / (width / 2) - 1;
  let speedSlow = 100 * normalizedPosition;
  let speedFast = 200 * normalizedPosition;
  spansSlow.forEach((span) => {
    span.style.transform = `translate(${speedSlow}px)`;
  });
  spansFast.forEach((span) => {
    span.style.transform = `translate(${speedFast}px)`;
  });
}

function handleWindowResize() {
  width = window.innerWidth;
}

$(document).ready(function () {
  const imgContainerHeight = $(".img-container").height();
});

const toggle = document.querySelector(".nav__toggle");
const menu_content = document.querySelector("nav");
const nav_content = document.querySelector(".nav-content");
const page2 = document.querySelector(".page2");

toggle.addEventListener("click", () => {
  nav_content.classList.toggle("open");
});

function validate(input) {
  const regex = /^[0-9]+$/;
  if(input.value !=regex){
    alert("Enter Valid Character ID")
  }
}
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('cid').value='';
  document.getElementById('Rcode').value='';
  document.getElementById('vcode').value='';
  document.getElementById('cid').disabled=true;
  document.getElementById('Rcode').disabled=true;
  document.getElementById('vcode').disabled=true;
  document.getElementById('Layer_1').classList.add('animated');
  document.getElementById('form-content').style.display="none";
  document.getElementById('Layer_1').style.display="block";
  

});


const downbtn = document.querySelector('.pos');

downbtn.addEventListener('click',()=>{
  window.location.href = "#page-5";
})