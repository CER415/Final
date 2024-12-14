const style = ["fantastical", "futuristic", "realistic", "woodcut", "interpretive"];
const topic = ["nature", "messenger", "forgotten hero", "relic", "grief"];
const setting = ["forest", "cliff", "night", "space", "developed"];
const medium = ["watercolor", "charcoal", "pencil and paper", "ink", "acrylic paint"];

function prompt() {
  const indexStyle = style[Math.floor(Math.random() * style.length)];
  console.log(indexStyle);
  const indexTopic = topic[Math.floor(Math.random() * topic.length)];
  console.log(indexTopic);
  const indexSetting = setting[Math.floor(Math.random() * setting.length)];
  console.log(indexSetting);
  const indexMedium = medium[Math.floor(Math.random() * medium.length)];
  console.log(indexMedium);
  
  
  let outputStyle = document.getElementById("style");
  outputStyle.innerText = indexStyle;
  
  let outputTopic = document.getElementById("topic");
  outputTopic.innerText = indexTopic;
  
  let outputSetting = document.getElementById("place");
  outputSetting.innerText = indexSetting;
  
  let outputMedium = document.getElementById("medium");
  outputMedium.innerText = indexMedium;
}