// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = "2211-ftb-et-web-ft";
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

export const fetchAllPlayers = async () => {
  try {
    const response = await fetch(`${APIURL}players`);
    const result = await response.json();
    if (result.error) {
      throw result.error;
    }
    return result.data.players;
  } catch (error) {
    console.error("Uh oh, trouble fetching!", error);
  }
};

export const fetchSinglePlayer = async (playerId) => {
  try {
    const response = await fetch(`${APIURL}players/${playerId}`);
    const result = await response.json();
    if (result.error) {
      throw result.error;
    }
    return result.data;
  } catch (error) {
    console.error("Uh oh, trouble fetching!", error);
  }
};
export const addNewPlayer = async (playerObj) => {};

export const removePlayer = async (playerId) => {};
