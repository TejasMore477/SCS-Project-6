let lt = gsap.timeline()
lt.from("header a",{
    y:-50,
    opacity:0,
    duration:0.5,
    delay:0.8,
    stagger:0.3,
})
lt.from(" h1",{
    x:-100,
    opacity:0,
    duration:0.8,
    stagger:0.5,
})
lt.from("img",{
    x:50,
    opacity:0,
    rotate:45,
    duration:0.5,
    stagger:0.5,
})
gsap.from("footer a",{
    y:10,
    opacity:0,
    duration:0.5,
    delay:0.8,
    stagger:0.3,
})