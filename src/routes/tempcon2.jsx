import * as React from 'react';


export default function TempControlh2() {
    const [value, setValue] = React.useState('70');
               
    const handleChange = (event) => {
       
      setValue(event.target.value);
    };    
        return (
          <div>
      
            <h1>Chicken House 2 Settings</h1>
      
              <p>Current Temp: (Get temp from Rotem)</p>
               
                <label>
               
                  New Max Temp:
               
                    <select value={value} onChange={handleChange}>
               
                      <option value="70">70</option>
                      <option value="71">71</option>
                      <option value="72">72</option>
                      <option value="73">73</option>
                      <option value="74">74</option>
                      <option value="75">75</option>
                      <option value="76">76</option>
                      <option value="77">77</option>
                      <option value="78">78</option>
                      <option value="79">79</option>
                      <option value="80">80</option>
                      <option value="81">81</option>
                      <option value="82">82</option>
                      <option value="83">83</option>                          
                      <option value="84">84</option>
                      <option value="85">85</option>
                      <option value="86">86</option>
                      <option value="87">87</option>
                      <option value="88">88</option>
                      <option value="89">89</option>
                      <option value="90">90</option>
                      <option value="91">91</option>
                      <option value="92">92</option>
                      <option value="93">93</option>
                      <option value="94">94</option>
                      <option value="95">95</option>
                      <option value="96">96</option>
                      <option value="97">97</option>
                      <option value="98">98</option>
                      <option value="99">99</option>
                      <option value="100">100</option>
      
                    </select>
                  </label>
                </div>
              );    
};