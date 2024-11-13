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
4. How to structure the state  
   a. Always merge the state when two or more state
   variables get updated. For example if both `x` and `y`
   coordinates are to be updated at the same time, it is
   preferable to contain both `x` and `y` in a single state
   variable.  
   b. Ensure the state declaration does not allow for
   impossible states.  For example, when states `sending`
   and `sent` are mutually exclusive, the state declaration
   should not allow for both the states to be true.  
   c. Avoid and redundancy and duplication of
   state. Redundancy implies the redundant state can be
   inferred from other states, while duplication means same
   information is captured in multiple state variables.  
   d. Avoid deeply nested states. Keep the state structure
   flat or normalized.

5. 
   
      
  
