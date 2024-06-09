import {SchemaGenerator} from "./SchemaGenerator.js";
import Prism from "../snowpack/pkg/prismjs.js";
function updateOutputValue() {
  const invalidTextareaClass = "input-textarea-invalid";
  try {
    const inputValue = getInputValue();
    const output = schemaGenerator.generateSchemaFrom(inputValue);
    const prismHtml = Prism.highlight(output, Prism.languages.javascript, "javascript");
    outputElement.innerHTML = prismHtml;
    inputTextArea.classList.remove(invalidTextareaClass);
    isValidInput = true;
  } catch (error) {
    inputTextArea.classList.add(invalidTextareaClass);
    isValidInput = false;
  }
}
function getInputValue() {
  try {
    return JSON.parse(inputTextArea.value);
  } catch {
    return eval("(" + inputTextArea.value + ")");
  }
}
function updateCopyButtonState() {
  if (isValidInput) {
    copyToClipboardButton.removeAttribute("disabled");
  } else {
    copyToClipboardButton.setAttribute("disabled", "disabled");
  }
}
function openSettingsModal() {
  settingsModalOverlay.classList.remove("modal-hidden");
}
function hideSettingsModal() {
  settingsModalOverlay.classList.add("modal-hidden");
}
function applyNewSettings() {
  const makeFieldsRequired = makePropertiesRequiredInput.checked;
  const useTrailingCommas = useTrailingCommasInput.checked;
  const settings = {
    makeFieldsRequired,
    useTrailingCommas
  };
  schemaGenerator.applySettings(settings);
  localStorage.setItem(localStorageSettingsKey, JSON.stringify(settings));
}
function loadSettings() {
  const savedSettings = localStorage.getItem(localStorageSettingsKey);
  if (savedSettings) {
    const settings = JSON.parse(savedSettings);
    schemaGenerator.applySettings(settings);
    makePropertiesRequiredInput.checked = settings.makeFieldsRequired;
    useTrailingCommasInput.checked = settings.useTrailingCommas;
  }
}
const inputTextArea = document.getElementById("input-textarea");
const outputElement = document.getElementById("output");
const copyToClipboardButton = document.getElementById("copy-to-clipboard-button");
const settingsButton = document.getElementById("settings-button");
const settingsModalOverlay = document.getElementById("settings-modal-overlay");
const settingsCancelButton = document.getElementById("settings-cancel-button");
const settingsSaveButton = document.getElementById("settings-save-button");
const localStorageSettingsKey = "settings";
const makePropertiesRequiredInput = document.getElementById("setting-make-properties-required");
const useTrailingCommasInput = document.getElementById("setting-use-trailing-commas");
const schemaGenerator = new SchemaGenerator();
let isValidInput = true;
let copyButtonTextChangeTimeout;
loadSettings();
updateOutputValue();
inputTextArea.focus();
inputTextArea.addEventListener("input", (event) => {
  updateOutputValue();
  updateCopyButtonState();
});
copyToClipboardButton.addEventListener("click", () => {
  clearTimeout(copyButtonTextChangeTimeout);
  navigator.clipboard.writeText(outputElement.innerText);
  copyToClipboardButton.innerText = "Copied!";
  copyButtonTextChangeTimeout = window.setTimeout(() => {
    copyToClipboardButton.innerText = "Copy to clipboard";
  }, 2e3);
});
settingsButton.addEventListener("click", () => {
  openSettingsModal();
});
settingsModalOverlay.addEventListener("click", (event) => {
  if (event.target === settingsModalOverlay) {
    hideSettingsModal();
  }
});
settingsCancelButton.addEventListener("click", () => {
  hideSettingsModal();
});
settingsSaveButton.addEventListener("click", () => {
  applyNewSettings();
  updateOutputValue();
  hideSettingsModal();
});
