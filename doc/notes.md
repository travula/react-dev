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

3. This is achieved by the following steps.
   a. Identify all the visual states
   
   
   

