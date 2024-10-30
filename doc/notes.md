Notes on the learning
=====================

# State

1. State allows us think declaratively about the design of
   the UI.
2. The view is a function of the state.  We declare these
   states and implement their corresponding views. Once this
   is achieved, the next step is to link the input to the
   corresponding state change.
   
   An input changes the state, this change in state has a
   corresponding view. All input changes are tracked by
   event handlers and these event handlers are ties to state
   changes. 
   
   The state machine is formalized by  
   ```
   F(Xi, Yi) = Yi+1 and the projection definition - H(Yi) =
   Zi, where Zi is the ith view.
   ```

3. This is achieved by the following steps.  
   a. Identify all the visual states of the component.  This
      is done by creating a mapping between the visual
      states and the and the different states of the component.  

      ```
      H(Yi) = Zi, where, Yi is the state and Zi is the
      corresponding view
      ```
   b. Determine the events that trigger the state changes.
      These events are either driven by users or by the
      computer like accessing a web service etc.
   
   c. Represent the state in memory with `useState`.  The
      function `F` sets the state based on the input and the
      application's logic.
      
   d. Structure the state to remove non-essentials and avoid
      bugs and paradoxes.
   
   e. Map the events identified in step `b` to state
      changes.
      
      ```
      F(Xi, Yi) = Yi+1, where Xi is the input and Yi is the state
      ```

  
   
  
      



   
   
   

