import { Form } from "react-router-dom";

function tempDropdownOne() {
    tempDropdownOne = tempMenuOne

    return (
<div class="dropdown is-active">
  <div class="dropdown-trigger">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
      <span>Dropdown button</span>
      <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu" role="menu">
    <div class="dropdown-content">
      <a href="#" class="dropdown-item">
        Dropdown item
      </a>
      <a class="dropdown-item">
        Other dropdown item
      </a>
      <a href="#" class="dropdown-item is-active">
        Active dropdown item
      </a>
      <a href="#" class="dropdown-item">
        Other dropdown item
      </a>
      <hr class="dropdown-divider"></hr>
      <a href="#" class="dropdown-item">
        With a divider
      </a>
    </div>
  </div>
</div>
)};

function tempDropdownTwo() {
    tempDropdownTwo = tempMenutwo

    return (
        <div class="dropdown is-active">
        <div class="dropdown-trigger">
          <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
            <span>Dropdown button</span>
            <span class="icon is-small">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
          <div class="dropdown-content">
            <a href="#" class="dropdown-item">
              Dropdown item
            </a>
            <a class="dropdown-item">
              Other dropdown item
            </a>
            <a href="#" class="dropdown-item is-active">
              Active dropdown item
            </a>
            <a href="#" class="dropdown-item">
              Other dropdown item
            </a>
            <hr class="dropdown-divider"></hr>
            <a href="#" class="dropdown-item">
              With a divider
            </a>
          </div>
        </div>
      </div> 
    )
};


export default function tempControl() {
const tempInfo = {
    currentTemp: "last",
    newTemp: "Name",
}
    return (
        <div>
            <h1>{`tempInfo.currentTemp`}</h1>
        
            <h1>{`tempInfo.newTemp`}</h1>
        </div>
        
    )
  };