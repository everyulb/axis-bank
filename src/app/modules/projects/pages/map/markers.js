const jsonString = `[
    {
      "name": "Darshan Maha Vidhalya Nala",
      "discharge": "25 LPM",
      "reason of pollution": "Grey Water, Black Water",
      "status": "Tapped",
      "images": ["https://drive.google.com/uc?authuser=0&id=1Wo-RuZDeS1foG7juBe13ffrH_sgAQaMG&export=download","https://drive.google.com/uc?authuser=0&id=1pXId_qOEDLaMp3DMGx1u5CsSZ3Anakmw&export=download"],
      "lat": 30.12425,
      "long": 78.31413889,
      "remark": ""
    },
    {
      "name": "Pracheen Hanuman Mandir nala",
      "discharge": "25 LPM",
      "reason of pollution": "Grey Water, Black Water",
      "status": "Tapped",
      "images": ["https://drive.google.com/uc?authuser=0&id=1bk5wpYKW-DnSKx_8ZRsNqgrz5TvfK4Ob&export=download"],
      "lat": 30.12413889,
      "long": 78.31369444,
      "remark": ""
    },
    {
      "name": "Sarwajanik Sochalya nala",
      "discharge": "25 LPM",
      "reason of pollution": "Grey Water, Black Water",
      "status": "Tapped",
      "images": ["https://drive.google.com/uc?authuser=0&id=1u9p-iaykLmxLuNqQQFZbgIw267LsIxbA&export=download"],
      "lat": 30.12391667,
      "long": 78.31366667,
      "remark": ""
    },
    {
      "name": "Asian Gems and Handicraft",
      "discharge": "15 LPM",
      "reason of pollution": "Grey Water, Black Water",
      "status": "Tapped",
      "images": ["https://drive.google.com/uc?authuser=0&id=1h6J8oJxfroZrgnAxdXKEnOONYxze6SQo&export=download","https://drive.google.com/uc?authuser=0&id=1fR8EaRGxWtk9qbXd9Owa-W3Ud7WAgMCC&export=download"],
      "lat": 30.12358333,
      "long": 78.31283333,
      "remark": ""
    },
    {
      "name": "Nav Ghat nala",
      "discharge": "60 LPM",
      "reason of pollution": "Grey Water, Black Water",
      "status": "Tapped",
      "images": ["https://drive.google.com/uc?authuser=0&id=1hlPtlZ2kMEjxiKo8t-AqMPvZM_4QC5pK&export=download"],
      "lat": 30.12302778,
      "long": 78.31180556,
      "remark": "Nav Ghat and PWD Guest House nala is same"
    },
    {
      "name": "Omkaranand public Ghat nala",
      "discharge": "30 LPM",
      "reason of pollution": "Grey Water, Black Water",
      "status": "Tapped",
      "images": ["https://drive.google.com/uc?authuser=0&id=1Pq1biGBoRIQ1g4n46Fhxeezy90zbh7ed&export=download"],
      "lat": 30.12238889,
      "long": 78.3105,
      "remark": ""
    },
    {
      "name": "Khara sroat nala (Monsoon nala)",
      "discharge": "100 LPM",
      "reason of pollution": "Grey Water, Black Water",
      "status": "Tapped",
      "images": ["https://drive.google.com/uc?authuser=0&id=1wl5b2l50LCm1nEzjJShwqLXU1C7kNUcQ&export=download"],
      "lat": 30.12133333,
      "long": 78.30716667,
      "remark": ""
    },
    {
      "name": "Muni Ki Reti parking nala",
      "discharge": "150 LPM",
      "reason of pollution": "Grey Water, Black Water",
      "status": "90% work complete",
      "images": ["https://drive.google.com/uc?authuser=0&id=180yHzM-a9PuqXB91f0Ra5ZytyXqa34Am&export=download"],
      "lat": 30.11480556,
      "long": 78.30686111,
      "remark": ""
    },
    {
      "name": "Ganga resort nala",
      "discharge": "100 LPM",
      "reason of pollution": "Grey Water, Black Water",
      "status": "70% work complete",
      "images": ["https://drive.google.com/uc?authuser=0&id=1JDfvWbjrzlKrbBHHPAw8IZ-AcHlLk-hu&export=download","https://drive.google.com/uc?authuser=0&id=1-NSUmM3iyKf2FyAlMA0WnPlGjCEi2kwt&export=download"],
      "lat": 30.11419444,
      "long": 78.30719444,
      "remark": ""
    },
    {
      "name": "Dhalwala nala (Natural water source)",
      "discharge": "5000 LPM",
      "reason of pollution": "Grey Water, Black Water",
      "status": "To be Tapped",
      "images": ["https://drive.google.com/uc?authuser=0&id=14eWG07LHZxrB5SUmhUF7nPYgfGjQfBXh&export=download"],
      "lat": 30.10738889,
      "long": 78.30808333,
      "remark": "STP proposed"
    },
    {
      "name": "Chandreshwar nala",
      "discharge": "100 LPM",
      "reason of pollution": "Grey Water, Black Water",
      "status": "To be Tapped",
      "images": ["https://drive.google.com/uc?authuser=0&id=1wmzFre_RuXcaMoya24jzINgbrbZukZS3&export=download"],
      "lat": 30.10738889,
      "long": 78.30811111,
      "remark": ""
    },
    {
      "name": "Shamshan Ghat nala",
      "discharge": "200 LPM",
      "reason of pollution": "Grey Water, Black Water",
      "status": "To be Tapped",
      "images": ["https://drive.google.com/uc?authuser=0&id=18N3EDnPIf40lXNo9KbuzwokkMMvFZt_b&export=download","https://drive.google.com/uc?authuser=0&id=16yROjA2vurFMhdiabSS6LOa4stUuGh7s&export=download"],
      "lat": 30.10738889,
      "long": 78.30808333,
      "remark": ""
    }
  ]`;
  
  export const markers =  JSON.parse(jsonString);