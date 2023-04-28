import Image from "next/image";
import teams from "../teams";

export default function Stats({matchdetails}) {
  let homelogo = teams.find(team => team.name === matchdetails.hometeam ? team.logo : null)
  let awaylogo = teams.find(team => team.name === matchdetails.awayteam ? team.logo : null)
    return (
      <>
       <div className="relative bg-purple-900 w-full p-8 flex flex-col gap-2 justify-center items-center rounded-lg shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="800"
          width="1200"
          overflow="visible"
          viewBox="-30.7044 -21.55325 266.1048 129.3195"
          className="object-cover h-48 w-full"
        >
          <path
            d="M157.587 57.51l.563-2.387h4.563v17.973c0 3.51-.982 5.967-3.299 7.792-1.754 1.334-4.143 2.316-7.02 2.316-3.932 0-6.74-1.334-8.986-3.51l2.879-4.002c1.404 1.334 3.299 2.528 5.756 2.528 3.861 0 5.545-1.896 5.545-4.704v-1.334c-1.543 1.615-3.368 2.246-5.404 2.246-5.336 0-9.548-4.353-9.548-9.898 0-5.477 4.353-9.688 9.688-9.688 2.176.001 4.141 1.053 5.263 2.668m-4.631 2.037c-2.737 0-4.915 2.105-4.915 4.983 0 2.738 2.178 4.914 4.915 4.914s4.913-2.176 4.913-4.914c0-2.878-2.176-4.983-4.913-4.983M123.26 28.306c-2.177 0-4.003 1.264-4.423 3.3h8.704c-.42-1.966-2.174-3.3-4.281-3.3m.281 15.234c-5.826 0-10.109-4.001-10.109-9.828 0-5.266 3.861-9.969 9.969-9.969 4.563 0 9.267 3.439 9.267 9.828 0 .491 0 1.124-.14 1.825h-13.76c.49 2.106 2.387 3.512 4.703 3.512 2.106 0 3.721-.773 5.055-2.178l3.159 3.229c-2.035 2.317-4.984 3.581-8.144 3.581m58.337-15.234c-2.176 0-4 1.264-4.423 3.3h8.705c-.42-1.966-2.176-3.3-4.282-3.3m.282 15.234c-5.826 0-10.109-4.001-10.109-9.828 0-5.266 3.861-9.969 9.969-9.969 4.563 0 9.267 3.439 9.267 9.828 0 .491 0 1.124-.14 1.825h-13.761c.493 2.106 2.388 3.512 4.704 3.512 2.105 0 3.72-.773 5.055-2.178l3.158 3.229c-2.036 2.317-4.985 3.581-8.143 3.581m13.127 15.655c-2.176 0-4.001 1.264-4.422 3.3h8.705c-.422-1.966-2.177-3.3-4.283-3.3m.281 15.233c-5.828 0-10.109-4.001-10.109-9.828 0-5.266 3.861-9.969 9.969-9.969 4.563 0 9.268 3.439 9.268 9.828 0 .491 0 1.124-.143 1.825h-13.758c.491 2.106 2.387 3.51 4.703 3.51 2.106 0 3.721-.772 5.055-2.176l3.158 3.229c-2.036 2.318-4.983 3.581-8.143 3.581m-86.349-15.233c-2.177 0-4.001 1.264-4.423 3.3h8.705c-.42-1.966-2.175-3.3-4.282-3.3m.281 15.233c-5.826 0-10.109-4.001-10.109-9.828 0-5.266 3.86-9.969 9.967-9.969 4.564 0 9.268 3.439 9.268 9.828 0 .491 0 1.124-.14 1.825h-13.761c.492 2.106 2.389 3.51 4.705 3.51 2.105 0 3.719-.772 5.055-2.176l3.158 3.229c-2.035 2.318-4.983 3.581-8.143 3.581m-28.852-.491v-27.87h5.545v22.605h12.075v5.265zm21.13-30.888V24.234h4.493l.563 2.738c.841-1.756 2.525-2.948 4.773-2.948.491 0 .982.069 1.474.21v4.984c-.633-.14-1.192-.211-1.825-.211-2.527 0-4.282 1.545-4.282 4.563v9.478h-5.196zm91.544 0V24.234h4.492l.562 2.738c.843-1.756 2.527-2.948 4.774-2.948.492 0 .982.069 1.475.21v4.984c-.633-.14-1.193-.211-1.826-.211-2.527 0-4.281 1.545-4.281 4.563v9.478h-5.196zm-36.295-11.093c0-2.036-1.123-3.3-2.879-3.3-2.035 0-3.088 1.264-3.088 3.371v11.021h-5.195V31.956c0-2.036-1.123-3.3-2.878-3.3-2.036 0-3.089 1.264-3.089 3.371v11.021h-5.195V24.234h4.563l.563 2.457s1.123-2.948 4.633-2.948c2.178 0 4.002.912 5.266 2.809l.141.21.141-.21c1.826-2.598 4.072-2.809 5.476-2.809 4.001 0 6.739 3.019 6.739 7.301v12.005h-5.195V31.956zm10.46-10.248c-1.825 0-3.229-1.405-3.229-3.16 0-1.825 1.404-3.229 3.229-3.229 1.825 0 3.229 1.403 3.229 3.229 0 1.754-1.404 3.16-3.229 3.16m-2.667 2.526h5.194v18.813h-5.194zm-34.049 35.313c-2.809 0-4.913 2.105-4.913 4.983 0 2.738 2.104 4.914 4.913 4.914 2.738 0 4.844-2.176 4.844-4.914 0-2.878-2.106-4.983-4.844-4.983m-1.053 14.881c-4.984 0-9.336-4.563-9.336-9.898 0-5.265 4.352-9.688 9.336-9.688 2.809 0 4.703.982 5.827 2.737l.562-2.457h4.563v18.814h-4.563l-.562-2.388c-1.124 1.687-3.229 2.88-5.827 2.88m44.719 0c-4.142 0-9.195-2.246-9.195-9.266v-10.04h5.193v9.688c0 3.229 1.476 4.633 4.002 4.633 2.316 0 4.002-1.614 4.002-4.633v-9.688h5.195v10.04c0 7.02-5.125 9.266-9.197 9.266M86.193 28.377h3.23c2.809 0 4.844-1.544 4.844-4.353 0-2.81-2.035-4.283-4.844-4.283h-3.23zm-5.545 14.672V14.476h9.055c5.897 0 10.32 3.51 10.32 9.548 0 6.107-4.353 9.688-10.32 9.688h-3.51v9.337zm-19.8633-3.6023c-1.8846 1.5444-3.4823 2.4052-3.4823 2.4052l.0218 4.8954c1.3472 1.4665 2.6762 2.6814 3.671 4.8954 1.8883-3.3156 1.5252-8.1897-.2105-12.196m-1.5324 16.0252s-.3848-2.0191-2.0225-3.9036l-3.7364.0886s-5.0364 4.2224-8.1083 4.3216c0 0 1.6921 3.0711 2.549 4.6758 1.6885-.3614 4.6624-1.6614 5.8607-3.0216 0 0 .7916 2.4902.6427 5.4303 1.6812-.9493 3.9978-3.5281 4.8148-7.591m-4.8148-8.8416l-.007-4.8777s-2.2332-.6978-4.6152-2.5008c-4.7858.7049-10.581 5.402-10.581 5.402s1.9571 3.6237 4.0995 7.5343c3.7655.5137 9.3138-4.1267 11.104-5.5578M67.201 66.9418l-3.0792-3.3262c-.8787 8.9903-5.3922 16.6238-13.682 21.9479l-1.2673-4.8494c-7.037 4.9592-19.1142 8.1755-29.4883 2.4512 1.289-6.4115 2.4329-12.908-.0218-20.6868-5.7444 8.6786-10.828 12.0791-10.828 12.0791-3.8817-6.3583-3.533-19.114-2.3747-22.8688L0 53.6406c0-4.2862 3.1627-13.3792 7.7452-18.4871L3.711 34.523h-.004c2.7415-5.4658 6.8338-10.177 11.841-13.7157l.007-.004c-1.5032 2.3166-1.525 8.0339 2.8796 10.2088-1.87-3.1986-2.0952-7.1518-.1416-9.1993 1.9535-2.065 5.2397-1.3566 7.3384.2445-.6245-1.7853-2.4546-4.0311-5.196-4.1834h-.004c5.1779-2.6 11.0567-4.063 17.2768-4.063 1.162 0 2.3203.0496 3.4532.1488 1.8083.7084 4.4626 3.195 5.7008 4.743 0 0 .0871-1.8242-.9513-4.0275 6.7357 1.6011 9.9492 4.2755 11.2964 5.5649.276 2.8409 1.1474 4.5447 2.2985 7.244-2.1823-2.384-7.6653-6.231-10.2834-7.152 0 0-.2142 2.462-1.1147 3.645-5.2143-3.6697-7.7742-4.5942-7.7742-4.5942-5.7227.8005-9.4046 2.9542-11.4054 4.6474l1.743 1.4488c-3.4496 1.0343-5.69 3.9248-5.69 3.9248.0254.0532 3.0828.4782 3.0828.4782s-.3123 3.5033 4.183 5.6995c3.8527 1.881 9.3901-.4534 14.6044 1.587-3.4277-3.861-5.7989-5.5862-5.7989-5.5862s-1.3616-.2763-2.3203-.2692c-1.1982.007-2.9847.2373-4.9419-.5065-.9368-.3578-2.0298-.9883-2.8867-1.5126 0 0 2.4074-2.4123 5.926-2.9436 0 0 3.1735.8714 5.6863 2.685 1.6703-1.5869 3.4132-1.5373 3.4132-1.5373s-1.7284 1.5728-1.2055 3.4785c2.5091 2.182 5.2324 5.3063 5.2324 5.3063 2.7742-1.4807 8.8055-1.1406 10.0437.2621-1.5686-1.9872-3.8308-3.645-5.581-5.0619-.2143-.7438-2.1242-3.3368-2.4474-3.5776 0 0 1.8156.5455 3.4387 1.966.4648-.6483 1.3362-1.3072 2.5236-1.5977 1.22.999 1.438 2.5328 1.4052 2.7878-.5483.6412-1.093.9033-1.093.9033l2.9413 3.1065.2941-2.228c6.7757 9.4401 10.4685 20.3644 5.719 34.0978M13.692 7.1979c3.9071 1.7463 6.4162 3.9496 6.8738 4.2861-.207-.9847-.9768-5.7243-1.4198-8.6679 2.2767 1.5409 7.56 5.1186 9.2993 6.2804.708-2.1289 3.1627-9.0823 3.1627-9.0823s4.4372 7.0066 5.1961 8.1436c.926-.9457 6.2274-6.702 7.6-8.1578.2287 3.312.541 8.048.6209 8.76.265-.3507 2.2948-3.1278 5.6972-5.6853-1.4742 2.8338-2.1787 6.7445-2.491 9.8864-3.3478-.9103-6.881-1.3991-10.5193-1.3991-6.9899 0-13.555 1.7923-19.2304 4.9414-1.0312-3.0357-2.647-6.8118-4.7895-9.3055"
            fill="#3d195b"
          />
        </svg>
        <div className="absolute w-full px-8 flex gap-2 flex-col justify-center items-center">
          <h2 className="text-white font-bold text-lg">Premier League</h2>
          <h4 className="text-purple-300 font-medium text-sm uppercase">Matchday</h4>
          <div className="w-full flex flex-row justify-between items-center">
            <div className="flex flex-col justify-center items-center">
              <Image src={homelogo.logo} width={50} height={50} alt={matchdetails.hometeam} />
              <h2 className="text-white font-bold text-lg">{matchdetails.hometeam}</h2>
              <h4 className="text-purple-300 font-medium text-sm">Home</h4>
            </div>
            <div className="flex-col justify-center items-center text-center">
              <div className="flex-row w-full justify-between items-center text-white font-bold">
                <span className="p-2 text-xl">{matchdetails.fthg}</span>
                <span className="p-2 text-xl">:</span>
                <span className="p-2 text-xl">{matchdetails.ftag}</span>
              </div>
              <h4 className="mt-4 hover:bg-purple-500 text-white font-bold rounded-full border-2 border-purple-700 px-4 py-1.5 text-sm">
                FT
              </h4>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image src={awaylogo.logo} width={50} height={50} alt={matchdetails.awayteam} />
              <h2 className="text-white font-bold text-lg">{matchdetails.awayteam}</h2>
              <h4 className="text-purple-300 font-medium text-sm">Away</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="backdrop-blur-sm bg-blue/30 p-4 w-full flex flex-col gap-4">
        <h1 className="text-white text-bold text-xl">Match stats</h1>
        <div className="flex justify-between items-center text-white">
          <span>{matchdetails.hs}</span>
          <span>Shots</span>
          <span>{matchdetails.as}</span>
        </div>
        <div className="flex justify-between items-center text-white">
          <span>{matchdetails.hst}</span>
          <span>Shots on target</span>
          <span>{matchdetails.ast}</span>
        </div>
        <div className="flex justify-between items-center text-white">
          <span>{matchdetails.hf}</span>
          <span>Fouls</span>
          <span>{matchdetails.af}</span>
        </div>
        <div className="flex justify-between items-center text-white">
          <span>{matchdetails.hy}</span>
          <span>Yellow cards</span>
          <span>{matchdetails.ay}</span>
        </div>
        <div className="flex justify-between items-center text-white">
          <span>{matchdetails.hr}</span>
          <span>Red cards</span>
          <span>{matchdetails.ar}</span>
        </div>
        <div className="flex justify-between items-center text-white">
          <span>0</span>
          <span>Offsides</span>
          <span>1</span>
        </div>
        <div className="flex justify-between items-center text-white">
          <span>{matchdetails.hc}</span>
          <span>Corners</span>
          <span>{matchdetails.ac}</span>
        </div>
      </div>

        
      </>
    );
  }
  