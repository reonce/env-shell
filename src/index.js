const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const { envMap } = require("../static.js");

const ENV_PATH = path.resolve(process.cwd(), ".env.development.local");
const ENV_FS = fs.readFileSync(ENV_PATH, "utf-8");

const handleFile = (file, envMode) => {
  const obj = Object.create(null);
  file
    .toString()
    .split("\n")
    .forEach(function (line) {
      const keyValueArr = line.split("=");
      const [key, val = ""] = keyValueArr;
      if (!!key) {
        obj[key] = val;
      }
    });
  if (!obj[envMode]) {
    throw new Error(
      "在.env.development.local文件中找不到环境地址信息。\nPS: 测试、预发布、生产环境对应的键名分别为test、pre、production\n例如选择测试环境需要在文件中写入 test='http: test.dev.com'"
    );
  }
  return { ...obj, REACT_APP_API_HOST: obj[envMode] };
};

const writeEnvFile = (handledObj) => {
  try {
    let result = "";
    Object.keys(handledObj).forEach((key) => {
      result += `${key}=${handledObj[key]}\n`;
    });
    fs.writeFileSync(ENV_PATH, result);
    console.log("切换环境成功!");
  } catch (error) {
    throw new Error("写文件报错了:", error);
  }
};

const checkEnv = () => {
  inquirer
    .prompt([
      {
        name: "env",
        type: "list",
        message: "选择要切换的环境",
        choices: Object.keys(envMap),
        default: ["测试环境"],
      },
    ])
    .then((res) => {
      const env = envMap[res.env];
      const handledObject = handleFile(ENV_FS, env);
      writeEnvFile(handledObject);
    })
    .catch((err) => {
      throw new Error(err);
    });
};

module.exports = checkEnv;
