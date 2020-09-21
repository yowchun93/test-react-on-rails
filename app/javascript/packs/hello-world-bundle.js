import ReactOnRails from 'react-on-rails';

import HelloWorld from '../bundles/HelloWorld/components/HelloWorld';
import AgentApplication from '../bundles/HelloWorld/components/AgentApplication';
// import PersonalInfo from '../bundles/HelloWorld/components/PersonalInfo';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
  AgentApplication
});
