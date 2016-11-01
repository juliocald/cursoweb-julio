var obj = {
  "inventory": {
    "-name": "inventoryECCI",
    "-version": "1.0",
    "management": {
      "employee": [
        {
          "-id": "emp109870123",
          "name": "Gabriela Barrantes",
          "title": "Headmaster",
          "email": "gbarrantes@ecci.edu"
        },
        {
          "-id": "emp209810973",
          "name": "Óscar Porras",
          "title": "Janitor"
        },
        {
          "-id": "emp204010303",
          "name": "José Alfaro",
          "title": "Technician",
          "email": "jalfaro@ecci.edu"
        },
        {
          "-id": "emp708110557",
          "name": "Alexis Acuña",
          "title": "Janitor",
          "phone": "8888-1285"
        },
        {
          "-id": "emp111110741",
          "name": "Luis Loría",
          "title": "TI and Professor",
          "email": "lloria@ecci.edu",
          "phone": "2511-1234"
        }
      ]
    },
    "asset": {
      "-name": "ECCI",
      "-state": "ok",
      "-active": "yes",
      "-static": "yes",
      "type": "building",
      "person_in_charge": { "-refid": "emp109870123" },
      "asset": [
        {
          "-name": "IF305",
          "-state": "defective",
          "-active": "yes",
          "-static": "yes",
          "type": "classroom",
          "person_in_charge": { "-refid": "emp209810973" },
          "note": "3 leaks currently on the ceiling.",
          "asset": [
            {
              "-name": "VB78082",
              "-state": "ok",
              "-active": "yes",
              "-static": "no",
              "type": "video_beam",
              "person_in_charge": { "-refid": "emp204010303" }
            },
            {
              "-name": "ET130711",
              "-state": "damaged",
              "-active": "no",
              "-static": "no",
              "type": "Desk",
              "person_in_charge": { "-refid": "emp708110557" },
              "note": "Damaged by leaks."
            }
          ]
        },
        {
          "-name": "IF104",
          "-state": "ok",
          "-active": "yes",
          "-static": "yes",
          "type": "laboratory",
          "person_in_charge": { "-refid": "emp204010303" },
          "asset": [
            {
              "-name": "BV54403",
              "-state": "ok",
              "-active": "yes",
              "-static": "yes",
              "type": "video_beam",
              "person_in_charge": { "-refid": "emp209810973" }
            },
            {
              "-name": "HP03028",
              "-state": "ok",
              "-active": "yes",
              "-static": "yes",
              "type": "computer",
              "person_in_charge": [
                { "-refid": "emp204010303" },
                { "-refid": "emp111110741" }
              ],
              "asset": {
                "-name": "WD213001",
                "-state": "damaged",
                "-active": "yes",
                "-static": "yes",
                "type": "hard_drive",
                "note": "Seems to have some damaged sectors."
              }
            }
          ]
        }
      ]
    }
  }
};

//on document ready
$(document).ready(function(){
    jPut.users.data=obj;
});