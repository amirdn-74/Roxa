import { Facade } from "./facade/Facade";
import { SomeService } from "./SomeService";

class SomeServiceFacade extends Facade {

}

export default SomeServiceFacade.proxy<SomeService>();